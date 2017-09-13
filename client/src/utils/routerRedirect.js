// We import the wrapper component
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';
import { routerActions } from 'react-router-redux';

// We export a simple function which receives some options and return the wrapper
export default options => connectedRouterRedirect(options);
