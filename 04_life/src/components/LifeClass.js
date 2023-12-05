import { Component } from "react";

class LifeClass extends Component{
    state = {text: ""};

    // 1. 컴포넌트가 마운트될 때
    componentDidMount(){
        console.log("class component: ⭕ mount")
    }

    // 2. 컴포넌트가 업데이트될 때
    componentDidUpdate(prevProps, prevState){
        console.log("class component: ✅ update")
        
        if(prevState.text != this.state.text){
            console.log("class component: ✅✅ text update")
        }
    }

    // 3. 컴포넌트가 unmount될 때
    componentWillUnmount(){
        console.log("class component: ❌ unmount")
    }

    render(){
        return(
        <>
            <h2>클래스형 LifeCycle</h2>
            <div>Taiwan #{this.props.number}</div>
            <input type="text" value={this.state.text} onChange={(e) => this.setState({ text:e.target.value})}/>
        </>)
    };
}

export default LifeClass;