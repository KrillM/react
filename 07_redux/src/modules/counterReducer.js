const add = 'counter/increment'
const minus = 'counter/decrement'

// 발생할 수 있는 action을 return하는 함수를 만든 이유는? 액션 타입의 이름이 변경된다고 가정하면 
// action을 발생시킨 모든 곳(dispatch)에서 action.type을 다 변경해야 한다.
// 이를 해결하기 위해 만들었다.
export const increase = () => ({type: add})
export const decrease = () => ({type: minus})

const initialValue = { number: 100 };

const counterReducer = (state = initialValue, action) => {
  switch(action.type) {
    case 'increment': // 상수 선언 전 ver.3.0
    case add:         // 상수 선언 후 ver.3.1
      return {number: state.number + 1};
    case 'decrement':
    case minus:
      return {number: state.number - 1};
    default:
      return state;
  }
};

export default counterReducer;