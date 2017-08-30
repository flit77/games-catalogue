// Import the watcher we have just created
import { watchGetGames } from './games';

export default function* rootSaga() {
  // We start all the sagas in parallel
  yield [watchGetGames()];
}
