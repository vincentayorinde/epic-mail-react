import { axiosRequest } from '../../../utils';

export const loadSentPending = () => ({ type: 'SENT_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
export const loadSent = messages => ({ type: 'SENT_SUCCESS', payload: { messages, isCompleted: true, isLoading: false } });
export const sentError = payload => ({ type: 'SENT_ERROR', payload });

export const loadSentAction = (sentData, history) => async (dispatch) => {
  dispatch(loadSentPending());
  try {
    const result = await axiosRequest({ path: '/api/v2/messages/sent', payload: sentData, method: 'get' }); 
    dispatch(loadSent(result));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(sentError(message));
  }
};