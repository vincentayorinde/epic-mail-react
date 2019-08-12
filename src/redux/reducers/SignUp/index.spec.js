import signUpReducer from './index';

let initialState;

describe('Sign Up Reducer', () => {
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

    it('Should return the initial state of Sign Up', () => {
      expect(signUpReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SIGNUP_USER', () => {
      expect(signUpReducer(initialState, {
        type: 'SIGNUP_USER',
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

    it('Should handle SIGNUP_PENDING', () => {
      expect(signUpReducer(initialState, {
        type: 'SIGNUP_PENDING',
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

    it('Should handle SIGNUP_SUCCESS', () => {
      expect(signUpReducer(initialState, {
        type: 'SIGNUP_SUCCESS',
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

    it('Should handle SIGNUP_ERROR', () => {
      expect(signUpReducer(initialState, {
        type: 'SIGNUP_ERROR',
        payload: 'error'
      })).toEqual(
        {
          ...initialState,
          error: 'error'
        }
      );
    });

    it('Should handle SET_USER', () => {
      expect(signUpReducer(initialState, {
        type: 'SET_USER',
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

    it('Should handle CLEAN_SIGNUP', () => {
      expect(signUpReducer(initialState, {
        type: 'CLEAN_SIGNUP',
      })).toEqual(
        {
          ...initialState
        }
      );
    });
  });