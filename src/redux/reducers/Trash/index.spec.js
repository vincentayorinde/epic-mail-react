import trashReducer from './index';

let initialState;

describe('Trash Reducer', () => {
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
      expect(trashReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle TRASH_PENDING', () => {
      expect(trashReducer(initialState, {
        type: 'TRASH_PENDING',
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

    it('Should handle TRASH_ERROR', () => {
      expect(trashReducer(initialState, {
        type: 'TRASH_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle TRASH_SUCCESS', () => {
      expect(trashReducer(initialState, {
        type: 'TRASH_SUCCESS',
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
