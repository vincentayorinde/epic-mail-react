const initialState = {
  isLoading: false,
  error: null,
  messages: {},
  isCompleted: false,
  isSubmit: false,
};

const sentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SENT_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'SENT_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'SENT_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    default:
      return state;
  }
};

export default sentReducer;