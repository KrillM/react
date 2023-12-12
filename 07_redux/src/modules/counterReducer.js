const initialValue = { number: 100 };

const counterReducer = (state = initialValue, action) => {
  switch(action.type) {
    case 'increment':
      return {number: state.number + 1};
    case 'decrement':
      return {number: state.number - 1};
    default:
      return state;
  }
};

export default counterReducer;