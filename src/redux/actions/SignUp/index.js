import { axiosRequest, populateLocalStorage } from '../../../utils';

export const cleanSignUp = () => ({ type: 'CLEAN_SIGNUP' });
export const signUpPending = () => ({ type: 'SIGNUP_PENDING', payload: { isCompleted: false, isLoading: true, error: null } });
export const signUpSuccess = user => ({ type: 'SIGNUP_SUCCESS', payload: { user, isCompleted: true, isAuthenticated: true } });
export const signUpError = payload => ({ type: 'SIGNUP_ERROR', payload });
export const signUpUser = () => ({ type: 'SIGNUP_USER', payload: { isSubmit: true } });
export const setUser = payload => ({ type: 'SET_USER', payload });

export const signUpAction = (signUpData, history) => async (dispatch) => {
  // dispatch(signInPending());
  dispatch(cleanSignUp());
  // dispatch(signUpUser());
  try {
    const result = await axiosRequest({ url: '/api/v2/auth/signup', payload: signUpData, method: 'post' }); 
    populateLocalStorage(result.data);
    dispatch(signUpSuccess(result));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const message = response.data.message || response;
    /* istanbul ignore next */
    dispatch(signUpError(message));
  }
};

export const getUser = () => (dispatch) => {
  /* istanbul ignore next */
  if (localStorage.token && localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    dispatch(setUser(user));
  }
};
