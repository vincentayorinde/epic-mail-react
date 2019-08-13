const initialState = {
  isLoading: false,
  error: null,
  messages: {},
  isCompleted: false,
  isSubmit: false,
};

const inboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INBOX_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'INBOX_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'INBOX_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    default:
      return state;
  }
};

export default inboxReducer;