import getMessageReducer from './index';

let initialState;

describe('getMEssage Reducer', () => {
  beforeEach(() => {
    initialState = {
      error: null,
      message: {},
      isSubmit: false,
      isCompleted: false,
      isLoading: false,
    };
  });

    it('Should return the initial state of Inbox', () => {
      expect(getMessageReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle GET_MESSAGE_PENDING', () => {
      expect(getMessageReducer(initialState, {
        type: 'GET_MESSAGE_PENDING',
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

    it('Should handle GET_MESSAGE_ERROR', () => {
      expect(getMessageReducer(initialState, {
        type: 'GET_MESSAGE_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle GET_MESSAGE_SUCCESS', () => {
      expect(getMessageReducer(initialState, {
        type: 'GET_MESSAGE_SUCCESS',
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
