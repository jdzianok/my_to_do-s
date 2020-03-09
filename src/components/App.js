import React, { Component } from "react";
import "./App.css";
import arrow from "../assets/arrow_right.png";

class App extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <div className="taskContainer">
            <input type="text" name="task" className="task" />
            <label htmlFor="task" className="taskLabel">
              what
            </label>
          </div>
          <div className="addTaskContainer">
            <button className="addTaskBtn">
              <span className="addTaskText">ADD IT</span>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
