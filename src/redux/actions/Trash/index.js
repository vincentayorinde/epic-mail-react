import { axiosRequest } from '../../../utils';

export const loadTrashPending = () => ({ type: 'TRASH_PENDING', payload: { isCompleted: false, isLoading: true, error: null} });
export const loadTrash = messages => ({ type: 'TRASH_SUCCESS', payload: { messages, isCompleted: true, isLoading: false } });
export const trashError = payload => ({ type: 'TRASH_ERROR', payload });

export const loadTrashAction = (sentData, history) => async (dispatch) => {
  dispatch(loadTrashPending());
  try {
    const result = await axiosRequest({ path: '/api/v2/messages', payload: sentData, method: 'get' }); 
    dispatch(loadTrash(result));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(trashError(message));
  }
};