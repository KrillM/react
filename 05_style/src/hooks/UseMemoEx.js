import { useMemo, useState } from "react";

// useMemo: rendering 할 때, 불필요한 연산 방지
export default function UseMemoEx () {
    const [text, setText] = useState('')
    const [count, setCount] = useState(1)
    const [list, setList] = useState([])

    // 기존 방법의 문제점: count 변수가 변경되지 않아도 rendering 될 때마다 다시 연산을 수행한다.
    // 비효율적이므로 count가 변경될때만 연산을 수행하고 싶다.
    // const calc = () => {
    //     console.log("calc......")
    //     return count * 2;
    // }

    // useMemo(콜백함수, 의존성 배열)
    // useMemo: 불필요한 연산을 방지하고 값을 기억하고 있다가 count의 변경이 있을때만 다시 연산하여 calc에 담아둔다.
    const calc = useMemo(() => {
        console.log("calc......")
        return count * 2;
    }, [count])

    return (
    <>  
        <h2>useMemo 공부</h2>
        <div>count: {count} <button onClick={() => setCount(count + 1)}>+1</button></div>
        {/* useMemo를 사용하지 않을 때 */}
        {/* <div>clac: {calc()}</div> */}

        {/* useMemo를 사용할 때 */}
        <div>clac: {calc}</div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </>)
}