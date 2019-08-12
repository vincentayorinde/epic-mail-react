import { combineReducers } from 'redux';

import signUpReducer from './SignUp';
import signInReducer from './SignIn';

const rootReducer = combineReducers({
  auth: signUpReducer,
  authLogin: signInReducer,
});

export default rootReducer;
