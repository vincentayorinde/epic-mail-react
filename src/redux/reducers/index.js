import { combineReducers } from 'redux';

import signUpReducer from './SignUp';

const rootReducer = combineReducers({
  auth: signUpReducer,
});

export default rootReducer;
