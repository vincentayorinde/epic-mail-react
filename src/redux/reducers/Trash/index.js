const initialState = {
  isLoading: false,
  error: null,
  messages: {},
  isCompleted: false,
  isSubmit: false,
};

const trashReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRASH_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'TRASH_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isSubmit: false,
      };
    case 'TRASH_ERROR':
      return {
        ...state,
        error: action.payload,
        isSubmit: false,
      };
    default:
      return state;
  }
};

export default trashReducer;