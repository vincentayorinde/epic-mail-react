import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { deleteMessageAction, deleteMessagePending, deleteMessageSuccess, deleteMessageError } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';


describe('deleteMessage Actions', () => {

  test('deleteMessagePending should return type DELETE_MESSAGE_PENDING', () => {
    const deleteMessagePendingAction = deleteMessagePending();
    expect(deleteMessagePendingAction).toEqual({ type: 'DELETE_MESSAGE_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
  });

  test('deleteMessageError should return type DELETE_MESSAGE_ERROR', () => {
    const payload = [''];
    const deleteMessageErrorAction = deleteMessageError(payload);
    expect(deleteMessageErrorAction).toEqual({ type: 'DELETE_MESSAGE_ERROR', payload });
  });

  test('deleteMessageSuccess should return type DELETE_MESSAGE_SUCCESS', () => {
    const payload = [];
    const deleteMessageSuccessAction = deleteMessageSuccess(payload);
    expect(deleteMessageSuccessAction).toEqual({ type: 'DELETE_MESSAGE_SUCCESS',  payload: { message: [], isCompleted: true, isLoading: false } });
  });

});

describe('Test deleteMessage', () => {
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
 
  test('Should delete a message when user is signed in', (done) => {
    const expectedActions = ['DELETE_MESSAGE_PENDING','DELETE_MESSAGE_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(deleteMessageAction(1, user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

});