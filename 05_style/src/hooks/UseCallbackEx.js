import { useCallback, useState } from "react";

// useCallback: 함수를 기억한다.
// 컴포넌트가 랜더링 될 때, 컴포던트 내부에 있는 함수도 다시 선언하게 된다.
// 다시 선언할 필요가 없는 함수는 선언을 하지않고, 이전에 선언한 함수를 사용하는 것이 좋다.
// 이를 도와주는 것이 useCallback이다.
export default function UseCallbackEx () {
    const [text, setText] = useState("");
    
    // 의존성 배열이 빈 값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가,
    // update될 때 다시 선언하지 않고 기억하고 있는 함수를 사용한다.
    // 컴포넌트 내부에서 변경될 수 있는 값은? 대표적으로 state, props가 있다.
    // handleOnChange 함수에서 UseCallbackEx 컴포넌트에서 유일하게 변경할 수 있는 값인 text를 활용하고
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    
    return (
    <>  
        <h2>useCallback 공부</h2>
        <input type="text" value={text} onChange={handleOnChange}/>
    </>
    )
}