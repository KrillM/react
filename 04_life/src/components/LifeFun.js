import { useEffect, useState } from "react";

const LifeFun = (props) => {
    const { number } = props;
    const [text, setText] = useState('')

    const message = () => {
        return "function component: ";
    }

    // useEffect(콜백함수, 의존성 배열)
    
    // 1. 의존성 배열이 빈 경우
    // mount 시에 콜백함수를 실행
    // callback 함수 내부에서 return 뒤에 오는 함수를 unmount시에 실행
    useEffect(()=>{
        console.log(message()+"⭕ mount")

        return () => {
            console.log(message()+"❌ unmount")
        }
    }, [])

    // 2. 의존성 배열을 전달하지 않을 경우
    // mount & update 시에 콜백함수를 실행
    useEffect(() => {
        console.log(message()+"✅ update")
    })

    // 3. 의존성 배열에 원소가 존재할 경우
    // 해당 원소가 update 될 때마다 콜백함수를 실행
    useEffect(() => {
        console.log(message()+"✅✅ text update")
    }, [text])

    return(
        <>
            <h2>함수형 LifeCycle</h2>
            <div>number is {number}</div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </>
    );
}

export default LifeFun;