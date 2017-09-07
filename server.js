import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import Game from './app/models/game';
import { getGames, getGame, postGame, deleteGame } from './app/routes/game';
import { signup, login, verifyAuth } from './app/routes/user';

const app = express();
const port = process.env.PORT || 8080;

// DB connection through Mongoose
const options = {
  useMongoClient: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/games', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  );
  next();
});

app.post('/auth/login', login);
app.post('/auth/signup', signup);

// API routes
app
  .route('/games')
  .post(verifyAuth, postGame)
  .get(getGames);
app
  .route('/games/:id')
  .get(getGame)
  .delete(verifyAuth, deleteGame);

// ...For all the other requests just sends back the Homepage
app.route('*').get((req, res) => {
  // res.send('Hello blog');
  res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);
