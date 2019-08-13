import { axiosRequest } from '../../../utils';

export const loadInboxPending = () => ({ type: 'INBOX_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
export const loadInbox = messages => ({ type: 'INBOX_SUCCESS', payload: { messages, isCompleted: true, isLoading: false } });
export const inboxError = payload => ({ type: 'INBOX_ERROR', payload });

export const loadInboxAction = (inboxData, history) => async (dispatch) => {
  dispatch(loadInboxPending());
  try {
    const result = await axiosRequest({ path: '/api/v2/messages', payload: inboxData, method: 'get' }); 
    dispatch(loadInbox(result));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(inboxError(message));
  }
};