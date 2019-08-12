const initialState = {
  isLoading: false,
  error: null,
  user: {},
  isAuthenticated: false,
  isCompleted: false,
  isSubmit: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    case 'CLEAN_SIGNUP':
      return {
        ...state,
        isCompleted: false,
        error: null,
      };
    case 'SET_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
      };
    case 'SIGNUP_USER':
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

export default signUpReducer;
