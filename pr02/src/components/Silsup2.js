import { Component } from "react";

class Silsup2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    addNumber = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }));
    }

    removeNumber = () => {
        this.setState((prevState) => ({ number: prevState.number - 1 }));
    }

    render(){
        return (
            <>
            <h3>Silsup2</h3>
            <div>
              number state value {this.state.number}{" "}
              <button onClick={this.addNumber}>+1</button>
              <button onClick={this.removeNumber}>-1</button>
            </div>
          </>
        );
    }
}

export default Silsup2;