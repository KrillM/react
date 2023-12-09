import { Component } from "react";

class Silsup3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        msg: "안녕하세요",
        isHidden: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClickHello = this.handleOnClickHello.bind(this);
  }

  handleOnClick() {
    this.setState({ msg: "" });
    this.setState({isHidden: true});
  }

  handleOnClickHello = () => {
    this.setState({ msg: "안녕하세요" });
    this.setState({isHidden: false});
  };

  render() {
    return (
      <>
        {!this.state.isHidden ? (
          <>
            <h1>{this.state.msg}</h1>
            <button onClick={this.handleOnClick}>사라져라</button>
          </>
        ) : (
          <button onClick={this.handleOnClickHello}>보여라</button>
        )}
      </>
    );
  }
}

export default Silsup3;