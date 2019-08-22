const initialState = {
  isLoading: false,
  error: null,
  user: {},
  isAuthenticated: false,
  isCompleted: false,
  isSubmit: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    case 'CLEAN_SIGNIN':
      return {
        ...state,
        isCompleted: true,
        error: null,
      };
    case 'SET_SIGNED_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
      };
    case 'SIGNIN_USER':
      return {
        ...state,
        isAuthenticated: true,
        isCompleted: true,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default signInReducer;
