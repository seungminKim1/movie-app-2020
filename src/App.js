import React from "react";
import PropTypes from "prop-types";

//{fav } = props.fav

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  remove = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidUpdate() {
    console.log("Updated");
  }
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }
}
//this.add 는 함수 자체를 onClick 프로퍼티에 할당해두는것, this.add() 는 add 함수를 '실행'한 결과를 담는것
export default App;
