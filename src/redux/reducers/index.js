import { combineReducers } from 'redux';

import signUpReducer from './SignUp';
import signInReducer from './SignIn';
import inboxReducer from './Inbox';
import getMessageReducer from './getMessage';
import composeReducer from './Compose';

const rootReducer = combineReducers({
  auth: signUpReducer,
  authLogin: signInReducer,
  inbox: inboxReducer,
  getMessage: getMessageReducer,
  compose: composeReducer
});

export default rootReducer;
