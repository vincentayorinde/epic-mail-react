const initialState = {
  isLoading: false,
  error: null,
  message: {},
  isCompleted: false,
  isSubmit: false,
};

const composeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPOSE_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'COMPOSE_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'COMPOSE_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    default:
      return state;
  }
};

export default composeReducer;