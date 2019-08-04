import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middlewares = applyMiddleware(reduxImmutableStateInvariant());

const storeConfig = initialState => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middlewares),
);

export default storeConfig;
