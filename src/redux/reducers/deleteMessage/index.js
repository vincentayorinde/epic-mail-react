const initialState = {
  isLoading: false,
  error: null,
  message: {},
  isCompleted: false,
  isSubmit: false,
};

const deleteMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_MESSAGE_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'DELETE_MESSAGE_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'DELETE_MESSAGE_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    default:
      return state;
  }
};

export default deleteMessageReducer;