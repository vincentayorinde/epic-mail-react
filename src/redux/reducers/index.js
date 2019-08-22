import { combineReducers } from 'redux';

import signUpReducer from './SignUp';
import signInReducer from './SignIn';
import inboxReducer from './Inbox';
import sentReducer from './Sent';
import getMessageReducer from './getMessage';
import composeReducer from './Compose';
import deleteMessageReducer from './deleteMessage';
import trashReducer from './Trash';

const rootReducer = combineReducers({
  auth: signUpReducer,
  authLogin: signInReducer,
  inbox: inboxReducer,
  sent: sentReducer,
  getMessage: getMessageReducer,
  compose: composeReducer,
  deleteMessage: deleteMessageReducer,
  trash: trashReducer
});

export default rootReducer;
