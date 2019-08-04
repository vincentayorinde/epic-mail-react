const sampleReducer = (state = { id: 1, name: '' }, action) => {
  switch (action.type) {
    case 'CREATE_SAMPLE':
      return { ...state, action };
    default:
      return state;
  }
};

export default sampleReducer;
