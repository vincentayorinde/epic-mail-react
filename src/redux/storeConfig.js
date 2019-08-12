import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middlewares = applyMiddleware(reduxImmutableStateInvariant(), thunk);

const storeConfig = createStore(
  rootReducer,
  composeWithDevTools(middlewares),
);

export default storeConfig;
