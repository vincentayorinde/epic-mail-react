import { combineReducers } from 'redux';

import signUpReducer from './SignUp';
import signInReducer from './SignIn';
import inboxReducer from './Inbox';

const rootReducer = combineReducers({
  auth: signUpReducer,
  authLogin: signInReducer,
  inbox: inboxReducer
});

export default rootReducer;
