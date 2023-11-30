import { Component } from "react";

class HandlerEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "hello world"
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setState({ title: "goodbye world" });
    }

    render(){
        return (
            <>
            {this.state.title}
            <button onClick={this.handleOnClick}>클릭</button>
          </>
        );
    }
}

export default HandlerEx;