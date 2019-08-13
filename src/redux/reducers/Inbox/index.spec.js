import inboxReducer from './index';

let initialState;

describe('Inbox Reducer', () => {
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
      expect(inboxReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle INBOX_PENDING', () => {
      expect(inboxReducer(initialState, {
        type: 'INBOX_PENDING',
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

    it('Should handle INBOX_ERROR', () => {
      expect(inboxReducer(initialState, {
        type: 'INBOX_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle INBOX_SUCCESS', () => {
      expect(inboxReducer(initialState, {
        type: 'INBOX_SUCCESS',
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
