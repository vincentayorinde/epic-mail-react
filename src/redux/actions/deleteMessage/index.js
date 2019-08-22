import { axiosRequest } from '../../../utils';

export const deleteMessagePending = () => ({ type: 'DELETE_MESSAGE_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
export const deleteMessageSuccess = message => ({ type: 'DELETE_MESSAGE_SUCCESS', payload: { message, isLoading: false, isCompleted: true } });
export const deleteMessageError = payload => ({ type: 'DELETE_MESSAGE_ERROR', payload });

export const deleteMessageAction = id => async (dispatch) => {
  dispatch(deleteMessagePending());
  try {
    const result = await axiosRequest({ path: `/api/v2/messages/${id}`, method: 'delete' }); 
    dispatch(deleteMessageSuccess(result));
  } catch (e) {
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(deleteMessageError(message));
  }
};