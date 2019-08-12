import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { signUpAction, signUpError, setUser, signUpSuccess, signUpUser, signUpPending, cleanSignUp, getUser } from './index';
import { axiosRequest } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

const user = {
  firstName: 'vinay',
  lastName: 'ayo',
  username: 'ayorinde',
  email: 'vinay@epicmail.com',
  password: '88888888'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';

describe('User Sign Up Actions', () => {
  describe('The Actions', () => {

    test('signUpUser should return type SIGNUP_USER', () => {
      const setSignUpUser = signUpUser();
      expect(setSignUpUser).toEqual({ type: 'SIGNUP_USER', payload: { isSubmit: true } });
    });

    test('signUpError should return type SIGNUP_ERROR', () => {
      const payload = [''];
      const signupErrorAction = signUpError(payload);
      expect(signupErrorAction).toEqual({ type: 'SIGNUP_ERROR', payload });
    });

    test('signUpPending should return type SIGNUP_PENDING', () => {
      const payload = user;
      const signUpPendingAction = signUpPending(payload);
      expect(signUpPendingAction).toEqual({ type: 'SIGNUP_PENDING', payload: { isCompleted: false, isLoading: true, error: null } });
    });

    test('signUpSuccess should return type SIGNUP_SUCCESS', () => {
      const payload = 'Vincent';
      const signUpSuccessAction = signUpSuccess(payload);
      expect(signUpSuccessAction).toEqual({ type: 'SIGNUP_SUCCESS', payload: { user: 'Vincent', isCompleted: true, isAuthenticated: true } });
    });

    test('setUser should return type SET_USER', () => {
      const payload = { user: { name: 'Vincent' } };
      const setUserActions = setUser(payload);
      expect(setUserActions).toEqual({ type: 'SET_USER', payload });
    });

    test('cleanSignUp should return type CLEAN_SIGNUP', () => {
      const cleanSignUpAction = cleanSignUp();
      expect(cleanSignUpAction).toEqual({ type: 'CLEAN_SIGNUP' });
    });

  })
});

describe('Sign Up Auth', () => {
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
 
  test('Should sign up user and initiate sign up actions', (done) => {
    const expectedActions = ['SIGNUP_PENDING', 'CLEAN_SIGNUP', 'SIGNUP_USER', 'SIGNUP_SUCCESS'];
    axiosRequest.mockResolvedValue({ user: { token, ...user }});
    store.dispatch(signUpAction(user)).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
    done();
  });

  test('Should set user if token exist and application is reloaded', () => {
    const expectedActions = ['SET_USER'];
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    store.dispatch(getUser());
    const dispatchedActions = store.getActions();
    const actionTypes = dispatchedActions.map(action => action.type);
    expect(actionTypes).toEqual(expectedActions);
  });

})
