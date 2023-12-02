import { useRef } from 'react'

const FunRef = () => {
    const input = useRef();
    const localVar = useRef(0);
    
    const focusInput = () => {
        input.current.focus();
    }

    const plusLocalVar = () => {
        localVar.current +=1;
        console.log(localVar.current)
    }
    
    return (
    <>
        <input type='text' ref={input} />{" "}
        <button type='button' onClick={focusInput}>버튼 1</button>
        <div>{localVar.current}</div>
        <button type='button' onClick={plusLocalVar}>버튼 1</button>
    </>
    );
}

export default FunRef;