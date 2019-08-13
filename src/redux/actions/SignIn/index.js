import { axiosRequest, populateLocalStorage } from '../../../utils';

export const cleanSignIn = () => ({ type: 'CLEAN_SIGNIN' });
export const signInPending = () => ({ type: 'SIGNIN_PENDING', payload: { isCompleted: false, isLoading: true, error: null } });
export const signInSuccess = user => ({ type: 'SIGNIN_SUCCESS', payload: { user, isCompleted: true, isAuthenticated: true } });
export const signInError = payload => ({ type: 'SIGNIN_ERROR', payload });
export const signInUser = () => ({ type: 'SIGNIN_USER', payload: { isSubmit: true } });
export const setSignedInUser = payload => ({ type: 'SET_SIGNED_USER', payload });

export const signInAction = (signInData, history) => async (dispatch) => {
  dispatch(signInPending());
  dispatch(cleanSignIn());
  // dispatch(signInUser());
  try {
    const result = await axiosRequest({ path: '/api/v2/auth/login', payload: signInData, method: 'post' }); 
    populateLocalStorage(result);
    dispatch(signInSuccess(result));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(signInError(message));
  }
};

export const getUser = () => (dispatch) => {
  /* istanbul ignore next */
  if (localStorage.token && localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    dispatch(setSignedInUser(user));
  }
};
