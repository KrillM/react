import { useState } from "react";

const EventFun = () => {
    const [msg, setMsg] = useState("hello");

    const handleOnClick = (e) => {
        console.log(e.target);
        setMsg("Bye")
    }

    const handleOnClickHello = () => {
        setMsg("안녕")
    }

    const handleOnClickTest = (message, test) => {
        setMsg(message)
    }

    const [name, setName] = useState("");

    const handleEnter = (e) => {
        if(e.key == 'Enter'){
            console.log("Enter pressed")
        }
    }

    return (
        <>
        <h3>함수형 component event handling 공부</h3>
        <div>
            {msg}{" "}
            <button onClick={handleOnClick}>잘 가</button>
            <button onClick={handleOnClickHello}>안녕</button>

            {/* 함수에서 매개변수를 받는 첫번째 방법 - onClick에서 익명함수를 선언하고, 그 내부에서 함수 실행*/}
            {/* <button onClick={() => {handleOnClickTest("테스트")}}>test</button> */}
            
            {/* 함수에서 매개변수를 받는 두번째 방법 - .bind 이용 */}
            {/* bind의 첫번째 매개변수는 . 앞에 있는 함수의 this를 결정한다. */}
            {/* 두번째 인자로 원하는 값을 넘겨주면 된다 */}
            <button onClick = {handleOnClickTest.bind(null, "silhum", "haja")}>test</button>
            <br/>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => {
                    setName(e.target.value)
                }} 
                onKeyDown={handleEnter} 
            />
        </div>
        </>
    );    
}

export default EventFun;