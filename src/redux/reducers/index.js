import { combineReducers } from 'redux';

import signUpReducer from './SignUp';
import signInReducer from './SignIn';
import inboxReducer from './Inbox';
import sentReducer from './Sent';
import getMessageReducer from './getMessage';
import composeReducer from './Compose';
import deleteMessageReducer from './deleteMessage';

const rootReducer = combineReducers({
  auth: signUpReducer,
  authLogin: signInReducer,
  inbox: inboxReducer,
  sent: sentReducer,
  getMessage: getMessageReducer,
  compose: composeReducer,
  deleteMessage: deleteMessageReducer
});

export default rootReducer;
