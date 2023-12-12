const INPUT_CASH = 'counter/INPUT_CASH';
const OUTPUT_CASH = 'counter/OUTPUT_CASH';

export const inputCash = (amount) => ({
  type: INPUT_CASH,
  payload: amount,
});

export const outputCash = (amount) => ({
  type: OUTPUT_CASH,
  payload: amount,
});

const initialState = {
  cash: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CASH:
      return { ...state, cash: state.cash + action.payload };
    case OUTPUT_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export default counterReducer;