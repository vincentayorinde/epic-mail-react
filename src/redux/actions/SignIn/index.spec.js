import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { signInAction, signInError, setSignedInUser, signInSuccess, signInUser, signInPending, cleanSignIn, getUser } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';

describe('User Sign In Actions', () => {
  describe('The Actions', () => {

    test('signInUser should return type SIGNIN_USER', () => {
      const setSignInUser = signInUser();
      expect(setSignInUser).toEqual({ type: 'SIGNIN_USER', payload: { isSubmit: true } });
    });

    test('signInError should return type SIGNIN_ERROR', () => {
      const payload = [''];
      const signInErrorAction = signInError(payload);
      expect(signInErrorAction).toEqual({ type: 'SIGNIN_ERROR', payload });
    });

    test('signInPending should return type SIGNIN_PENDING', () => {
      const payload = user;
      const signInPendingAction = signInPending(payload);
      expect(signInPendingAction).toEqual({ type: 'SIGNIN_PENDING', payload: { isCompleted: false, isLoading: true, error: null } });
    });

    test('signInSuccess should return type SIGNIN_SUCCESS', () => {
      const payload = 'Vincent';
      const signInSuccessAction = signInSuccess(payload);
      expect(signInSuccessAction).toEqual({ type: 'SIGNIN_SUCCESS', payload: { user: 'Vincent', isCompleted: true, isAuthenticated: true } });
    });

    test('setSignedInUser should return type SET_SIGNED_USER', () => {
      const payload = { user: { name: 'Vincent' } };
      const setUserActions = setSignedInUser(payload);
      expect(setUserActions).toEqual({ type: 'SET_SIGNED_USER', payload });
    });

    test('cleanSignIn should return type CLEAN_SIGNIN', () => {
      const cleanSignInAction = cleanSignIn();
      expect(cleanSignInAction).toEqual({ type: 'CLEAN_SIGNIN' });
    });

  })
});

describe('Sign In Auth', () => {
  let store;
  beforeEach(() => {
    moxios.install(axios);
    store = mockStore({
      isLoading: false,
      error: null,
      user: {},
      isAuthenticated: false,
      isCompleted: false,
      isSubmit: false,
    });
  });
  afterEach(() => {
    moxios.uninstall(axios);
    store.clearActions();
    localStorage.clear();
  });
 
  test('Should sign in user and initiate sign in actions', (done) => {
    const expectedActions = ['SIGNIN_PENDING', 'SIGNIN_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(signInAction(user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

  test('Should set user if token exist and application is reloaded', () => {
    const expectedActions = ['SET_SIGNED_USER'];
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    store.dispatch(getUser());
    const dispatchedActions = store.getActions();
    const actionTypes = dispatchedActions.map(action => action.type);
    expect(actionTypes).toEqual(expectedActions);
  });

})
