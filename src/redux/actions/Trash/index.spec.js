import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { loadTrashAction, loadTrashPending, loadTrash, trashError } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';


describe('Trash Actions', () => {
  test('loadTrashPending should return type TRASH_PENDING', () => {
    const loadTrashPendingAction = loadTrashPending();
    expect(loadTrashPendingAction).toEqual({ type: 'TRASH_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
  });

  test('trashError should return type TRASH_ERROR', () => {
    const payload = [''];
    const trashErrorAction = trashError(payload);
    expect(trashErrorAction).toEqual({ type: 'TRASH_ERROR', payload });
  });

  test('loadTrash should return type TRASH_SUCCESS', () => {
    const payload = [];
    const loadTrashAction = loadTrash(payload);
    expect(loadTrashAction).toEqual({ type: 'TRASH_SUCCESS',  payload: { messages: [], isCompleted: true, isLoading: false } });
  });

});

describe('Test Trash', () => {
  let store;
  beforeEach(() => {
    moxios.install(axios);
    store = mockStore({
      isLoading: false,
      error: null,
      messages: {},
      isCompleted: false,
    });
  });
  afterEach(() => {
    moxios.uninstall(axios);
    store.clearActions();
  });
 
  test('Should get trash messages when user is signed in', (done) => {
    const expectedActions = ['TRASH_PENDING','TRASH_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(loadTrashAction(user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

});