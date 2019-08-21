import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { loadSentAction, loadSentPending, loadSent, sentError } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';


describe('Sent Actions', () => {

  test('loadSentPending should return type SENT_PENDING', () => {
    const loadSentPendingAction = loadSentPending();
    expect(loadSentPendingAction).toEqual({ type: 'SENT_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
  });

  test('sentError should return type SENT_ERROR', () => {
    const payload = [''];
    const sentErrorAction = sentError(payload);
    expect(sentErrorAction).toEqual({ type: 'SENT_ERROR', payload });
  });

  test('sentInbox should return type SENT_SUCCESS', () => {
    const payload = [];
    const loadSentAction = loadSent(payload);
    expect(loadSentAction).toEqual({ type: 'SENT_SUCCESS',  payload: { messages: [], isCompleted: true, isLoading: false } });
  });

});

describe('Test Sent', () => {
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
 
  test('Should get sent messages when user is signed in', (done) => {
    const expectedActions = ['SENT_PENDING','SENT_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(loadSentAction(user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

});