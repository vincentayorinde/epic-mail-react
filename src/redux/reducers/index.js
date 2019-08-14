import { combineReducers } from 'redux';

import signUpReducer from './SignUp';
import signInReducer from './SignIn';
import inboxReducer from './Inbox';
import getMessageReducer from './getMessage';

const rootReducer = combineReducers({
  auth: signUpReducer,
  authLogin: signInReducer,
  inbox: inboxReducer,
  getMessage: getMessageReducer
});

export default rootReducer;
