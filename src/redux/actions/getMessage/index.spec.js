import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { getMessageAction, getMessagePending, getMessageSuccess, getMessageError } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';


describe('getMessage Actions', () => {

  test('getMessagePending should return type GET_MESSAGE_PENDING', () => {
    const getMessagePendingAction = getMessagePending();
    expect(getMessagePendingAction).toEqual({ type: 'GET_MESSAGE_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
  });

  test('getMessageError should return type GET_MESSAGE_ERROR', () => {
    const payload = [''];
    const getMessageErrorAction = getMessageError(payload);
    expect(getMessageErrorAction).toEqual({ type: 'GET_MESSAGE_ERROR', payload });
  });

  test('getMessageSuccess should return type GET_MESSAGE_SUCCESS', () => {
    const payload = [];
    const getMessageSuccessAction = getMessageSuccess(payload);
    expect(getMessageSuccessAction).toEqual({ type: 'GET_MESSAGE_SUCCESS',  payload: { message: [], isCompleted: true, isLoading: false } });
  });

});

describe('Test getMessage', () => {
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
 
  test('Should get a message when user is signed in', (done) => {
    const expectedActions = ['GET_MESSAGE_PENDING','GET_MESSAGE_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(getMessageAction(1, user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

});