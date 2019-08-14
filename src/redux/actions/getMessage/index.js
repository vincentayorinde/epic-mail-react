import { axiosRequest } from '../../../utils';

export const getMessagePending = () => ({ type: 'GET_MESSAGE_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
export const getMessageSuccess = message => ({ type: 'GET_MESSAGE_SUCCESS', payload: { message, isCompleted: true, isLoading: false } });
export const getMessageError = payload => ({ type: 'GET_MESSAGE_ERROR', payload });

export const getMessageAction = id => async (dispatch) => {
  dispatch(getMessagePending());
  try {
    const result = await axiosRequest({ path: `/api/v2/messages/${id}`, method: 'get' }); 
    dispatch(getMessageSuccess(result));
  } catch (e) {
    /* istanbul ignore next */
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(getMessageError(message));
  }
};