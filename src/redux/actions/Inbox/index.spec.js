import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { loadInboxAction, loadInboxPending, loadInbox, inboxError } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';


describe('Inbox Actions', () => {

  test('loadInboxPending should return type INBOX_PENDING', () => {
    const loadInboxPendingAction = loadInboxPending();
    expect(loadInboxPendingAction).toEqual({ type: 'INBOX_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
  });

  test('inboxError should return type INBOX_ERROR', () => {
    const payload = [''];
    const inboxErrorAction = inboxError(payload);
    expect(inboxErrorAction).toEqual({ type: 'INBOX_ERROR', payload });
  });

  test('loadInbox should return type INBOX_SUCCESS', () => {
    const payload = [];
    const loadInboxAction = loadInbox(payload);
    expect(loadInboxAction).toEqual({ type: 'INBOX_SUCCESS',  payload: { messages: [], isCompleted: true, isLoading: false } });
  });

});

describe('Test Inbox', () => {
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
 
  test('Should get messages when user is signed in', (done) => {
    const expectedActions = ['INBOX_PENDING','INBOX_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(loadInboxAction(user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

});