import { Component, createRef } from "react";

class ClassRef extends Component{
    input2 = createRef();

    // 콜백함수를 이용하여 ref 지정할 때, ref 변수를 사용하는 방법
    focusInput1 = () => {
        this.input1.focus();
    }

    focusInput2 = () => {
        this.input2.current.focus();
    }

    render(){
        return(
        <>
            {/* 콜백함수를 이용하여 ref 지정 */}
            <input type='text' ref={(ref) => {
                // ref에 콜백함수를 넘길 때 첫번째 매개변수는 ref에 걸려있는 요소를 담고 있다.
                this.input1 = ref
            }}/>{" "}
            <button type='button' onClick={this.focusInput1} >버튼 2</button><br/>

            <input type='text' ref={this.input2}/>{" "}
            <button type='button' onClick={this.focusInput2}>버튼 3</button>
        </>
        );
    }
}

export default ClassRef;