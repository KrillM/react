const initialValue = false;

const isDataReducer = (state = initialValue, action) => {
  switch(action.type) {
    case 'change':
      return !state;
    default:
      return state;
  }
};

export default isDataReducer;