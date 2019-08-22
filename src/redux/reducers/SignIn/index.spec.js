import signInReducer from './index';

let initialState;

describe('Sign In Reducer', () => {
  beforeEach(() => {
    initialState = {
      error: null,
      user: {},
      isAuthenticated: false,
      isCompleted: false,
      isSubmit: false,
      isLoading: false,
    };
  });

    it('Should return the initial state of Sign In', () => {
      expect(signInReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SIGNIN_USER', () => {
      expect(signInReducer(initialState, {
        type: 'SIGNIN_USER',
        payload: {
          user: {
            id: 1,
            name: 'Vincent',
          },
          isCompleted: true,
          isAuthenticated: true,
        }
      })).toEqual(
        {
          ...initialState,
          user: {
            id: 1,
            name: 'Vincent',
          },
          isCompleted: true,
          isAuthenticated: true,
        }
      );
    });

    it('Should handle SIGNIN_PENDING', () => {
      expect(signInReducer(initialState, {
        type: 'SIGNIN_PENDING',
        payload: {
          user: {
            id: 1,
            name: 'Vincent',
          },
          isLoading: true,
          isCompleted: false,
          isAuthenticated: false,
        }
      })).toEqual(
        {
          ...initialState,
          user: {
            id: 1,
            name: 'Vincent',
          },
          isLoading: true,
          isCompleted: false,
          isAuthenticated: false,
        }
      );
    });

    it('Should handle SIGNIN_SUCCESS', () => {
      expect(signInReducer(initialState, {
        type: 'SIGNIN_SUCCESS',
        payload: {
          user: {
            id: 1,
            name: 'Vincent',
          },
          isLoading: false,
          isCompleted: true,
          isAuthenticated: true,
        }
      })).toEqual(
        {
          ...initialState,
          user: {
            id: 1,
            name: 'Vincent',
          },
          isLoading: false,
          isCompleted: true,
          isAuthenticated: true,
        }
      );
    });

    it('Should handle SIGNIN_ERROR', () => {
      expect(signInReducer(initialState, {
        type: 'SIGNIN_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle SET_SIGNED_USER', () => {
      expect(signInReducer(initialState, {
        type: 'SET_SIGNED_USER',
        payload: {
          id: 1,
          name: 'Vincent',
        },
      })).toEqual(
        {
          ...initialState,
          isAuthenticated: true,
          user: {
            id: 1,
            name: 'Vincent',
          },
        }
      );
    });

    it('Should handle CLEAN_SIGNIN', () => {
      expect(signInReducer(initialState, {
        type: 'CLEAN_SIGNIN',
      })).toEqual(
        {
          ...initialState,
          isCompleted: true,
        }
      );
    });
  });