import composeReducer from './index';

let initialState;

describe('compose Reducer', () => {
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
      expect(composeReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle COMPOSE_PENDING', () => {
      expect(composeReducer(initialState, {
        type: 'COMPOSE_PENDING',
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

    it('Should handle COMPOSE_ERROR', () => {
      expect(composeReducer(initialState, {
        type: 'COMPOSE_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle  COMPOSE_SUCCESS', () => {
      expect(composeReducer(initialState, {
        type: 'COMPOSE_SUCCESS',
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
