import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/action";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To Redux Saga</h1>
        <div>
          Age : <span>{this.props.age}</span>
        </div>
        <button className="btndesign" onClick={this.props.onAgeUp}>
          Age UP
        </button>
        <button className="btndesign" onClick={this.props.onAgeDown}>
          Age DOWN
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
