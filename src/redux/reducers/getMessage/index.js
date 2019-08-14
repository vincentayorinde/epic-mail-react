const initialState = {
  isLoading: false,
  error: null,
  message: {},
  isCompleted: false,
  isSubmit: false,
};

const getMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'GET_MESSAGE_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'GET_MESSAGE_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    default:
      return state;
  }
};

export default getMessageReducer;