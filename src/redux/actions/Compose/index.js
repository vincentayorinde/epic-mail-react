import { axiosRequest } from '../../../utils';

export const composePending = () => ({ type: 'COMPOSE_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
export const composeSuccess = message => ({ type: 'COMPOSE_SUCCESS', payload: { message, isCompleted: true, isLoading: false } });
export const composeError = payload => ({ type: 'COMPOSE_ERROR', payload });

export const composeAction = (messageData) => async (dispatch) => {
  dispatch(composePending());
  try {
    const result = await axiosRequest({ path: '/api/v2/messages', payload: messageData, method: 'post' }); 
    dispatch(composeSuccess(result));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(composeError(message));
  }
};