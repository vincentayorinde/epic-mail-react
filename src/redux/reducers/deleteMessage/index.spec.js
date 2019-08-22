import deleteMessageReducer from './index';

let initialState;

describe('deleteMessage Reducer', () => {
  beforeEach(() => {
    initialState = {
      error: null,
      message: {},
      isSubmit: false,
      isCompleted: false,
      isLoading: false,
    };
  });

    it('Should return the initial state of deleteMessage', () => {
      expect(deleteMessageReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle DELETE_MESSAGE_PENDING', () => {
      expect(deleteMessageReducer(initialState, {
        type: 'DELETE_MESSAGE_PENDING',
        payload: {
          message: {},
          isLoading: true,
          isCompleted: false,
        }
      })).toEqual(
        {
          ...initialState,
          message: {},
          isLoading: true,
          isCompleted: false,
        }
      );
    });

    it('Should handle DELETE_MESSAGE_ERROR', () => {
      expect(deleteMessageReducer(initialState, {
        type: 'DELETE_MESSAGE_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle DELETE_MESSAGE_SUCCESS', () => {
      expect(deleteMessageReducer(initialState, {
        type: 'DELETE_MESSAGE_SUCCESS',
        payload: {
          message: {},
          isLoading: false,
          isCompleted: true,
        }
      })).toEqual(
        {
          ...initialState,
          message: {},
          isLoading: false,
          isCompleted: true,
        }
      );
    });

  });
