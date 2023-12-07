import { useCallback, useReducer, useState } from "react";

const initialValue = {value: 0};
const reducer = (prevState, action) => {
    switch(action.type) {
        case 'PLUS':
            return { value: prevState.value + 1 };
        case 'MINUS':
            return { value: prevState.value - 1 };
        case 'MULTI':
            return { value: prevState.value * action.number };
        case 'DIVID':
            return { value: prevState.value / action.number };
        case 'RESET':
            return initialValue;
        default:
            return { value: prevState.value };
    }
};

// state: 상태
// dispatch: 액션을 발생시키는 함수
// reducer: 실질적으로 상태를 업데이트하는 함수 (결국 dispatch가 실행시키는 함수)

export default function UseReducer() {
    // 만약에 여러 동작이 필요하다면? state를 사용해도 될까?
    // 일일이 찾아가면서 사용하는 번거로움이 생긴다.
    // const [state, setState] = useState(initialValue);
    // const plus = () => setState({value: state.value + 1});
    // const minus = () => setState({value: state.value - 1});
    // const reset = () => setState(initialValue);

    // reducer를 사용한다면 reducer() 함수를 읽으면서 사용하면 된다. 
    const [state, dispatch] = useReducer(reducer, initialValue);
    const [number, setNumber] = useState(0);

    const handleChangeNumber = useCallback((e) => setNumber(e.target.value), [])

    const plus = () => dispatch({ type: 'PLUS' });
    const minus = () => dispatch({ type: 'MINUS' });
    const multi = () => dispatch({ type: 'MULTI', number: number });
    const divid = () => dispatch({ type: 'DIVID', number: number });
    const reset = () => dispatch({ type: 'RESET' });

    return(
        <>
            <h2>UseReducer 공부</h2>
            <h1>{state.value}</h1>
            <div>
                <button onClick={plus}>+1</button>
                <button onClick={minus}>-1</button>
                <button onClick={reset}>reset</button>
            </div>

            <br/>
            <input type="number" value={number} onChange={handleChangeNumber} />
            <button onClick={multi}>곱하기</button>
            <br/>
            <input type="number" value={number} onChange={handleChangeNumber} />
            <button onClick={divid}>나누기</button>
        </>
    )
}