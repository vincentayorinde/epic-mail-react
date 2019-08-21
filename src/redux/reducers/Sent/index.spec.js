import sentReducer from './index';

let initialState;

describe('Sent Reducer', () => {
  beforeEach(() => {
    initialState = {
      error: null,
      messages: {},
      isSubmit: false,
      isCompleted: false,
      isLoading: false,
    };
  });

    it('Should return the initial state of Inbox', () => {
      expect(sentReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SENT_PENDING', () => {
      expect(sentReducer(initialState, {
        type: 'SENT_PENDING',
        payload: {
          messages: {},
          isLoading: true,
          isCompleted: false,
        }
      })).toEqual(
        {
          ...initialState,
          messages: {},
          isLoading: true,
          isCompleted: false,
        }
      );
    });

    it('Should handle SENT_ERROR', () => {
      expect(sentReducer(initialState, {
        type: 'SENT_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle SENT_SUCCESS', () => {
      expect(sentReducer(initialState, {
        type: 'SENT_SUCCESS',
        payload: {
          messages: {},
          isLoading: false,
          isCompleted: true,
        }
      })).toEqual(
        {
          ...initialState,
          messages: {},
          isLoading: false,
          isCompleted: true,
        }
      );
    });

  });
