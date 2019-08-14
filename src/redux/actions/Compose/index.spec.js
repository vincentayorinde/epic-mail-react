import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { composeAction, composePending, composeSuccess, composeError } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';


describe('compose Actions', () => {

  test('composePending should return type COMPOSE_PENDING', () => {
    const composePendingAction = composePending();
    expect(composePendingAction).toEqual({ type: 'COMPOSE_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
  });

  test('composeError should return type COMPOSE_ERROR', () => {
    const payload = [''];
    const composeErrorAction = composeError(payload);
    expect(composeErrorAction).toEqual({ type: 'COMPOSE_ERROR', payload });
  });

  test('composeSuccess should return type COMPOSE_SUCCESS', () => {
    const payload = {};
    const composeSuccessAction = composeSuccess(payload);
    expect(composeSuccessAction).toEqual({ type: 'COMPOSE_SUCCESS',  payload: { message: {}, isCompleted: true, isLoading: false } });
  });

});

describe('Test Compose Message', () => {
  let store;
  beforeEach(() => {
    moxios.install(axios);
    store = mockStore({
      isLoading: false,
      error: null,
      message: {},
      isCompleted: false,
    });
  });
  afterEach(() => {
    moxios.uninstall(axios);
    store.clearActions();
  });
 
  test('Should send a message when user is signed in', (done) => {
    const expectedActions = ['COMPOSE_PENDING','COMPOSE_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(composeAction(user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

});