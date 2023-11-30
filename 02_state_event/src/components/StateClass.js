import {Component} from "react"

class StateClass extends Component {

    // 옛날 방식
    // constructor(props) {
    //     super(props) // super는 부모 클래스의 생성자이다.
    //     // super를 실행하여야 this 객체를 사용할 수 있다.

    //     this.state = {
    //         number: 0,
    //         text: "hello"
    //     }
    // }

    // 만약 생성자를 구현하지 않으면, 기본 생성자가 자동으로 실행된다.
    // constructor(porps) {
    //     super(porps)
    // }

    // 오늘날 방식
    state = {
        number: 1,
        text: 'hi'
    }

    render() {
        const {number} = this.state

        return (
            <>
                <h3>Class형 Component state 공부</h3>
                <div>props 예시 {this.props.name}</div>
                <div>number state: {this.state.number}</div>
                <div>number state: {number}</div>
                <div>
                    text state: {this.state.text}{" "}
                    <button onClick={() => {
                            // state 변경은 보토 일반 변수 변경 시키듯이 변수에 값을 재할당하지 않는다.
                            // state를 변경하는 함수를 사용하기 때문에 클래스형 컴포넌트는 setState 메소드가 제공된다.
                            this.setState({
                                text: "こんにちは"
                            })
                        }}>
                        button
                    </button>    
                </div>
                <div>number state: {number}{" "}
                    <button onClick={() => {
                        // this.setState({number: number+1})
                        // this.setState({number: number+1})
                        // setState는 비동기로 실행되므로 위처럼 사용할 수 없다.

                        this.setState((prevState) => {
                            return {number: prevState.number+1}
                        })
                        this.setState((prevState) => ({ number: prevState.number + 1 }));
                    }}>
                        +2
                    </button>  
                </div>
            </>
        )
    }
}

const getNumber = () => {
    return 5;
}

export default StateClass