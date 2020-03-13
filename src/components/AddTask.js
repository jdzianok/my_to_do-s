import React, { Component } from "react";
import arrow from "../assets/arrow_right.svg";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    taskError: false,
    taskDate: this.minDate
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text, taskDate } = this.state;
    if (text.length > 2) {
      const addTask = this.props.addTask(text, taskDate);
      if (addTask) {
        this.setState({
          text: "",
          taskError: false,
          taskDate: this.minDate
        });
      }
    } else {
      this.setState({ taskError: true });
    }
  };

  render() {
    //max date doesn't work, don't know why (?)
    let maxDate = this.minDate.slice(0, 4) * 1 + 4;
    maxDate = maxDate + "-31-12";

    return (
      <form className="addTaskForm" onSubmit={this.handleSubmit}>
        <div className="taskContainer">
          <input
            type="text"
            name="text"
            className="taskInput"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <label htmlFor="task" className="taskLabel">
            what
          </label>
          {this.state.taskError ? (
            <p className="error">Wpisz conajmniej 3 znaki</p>
          ) : null}
        </div>
        <div className="taskContainer">
          <input
            type="date"
            name="taskDate"
            min={this.minDate}
            max={maxDate}
            className="dateInput"
            value={this.state.taskDate}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="task" className="dateLabel">
            deadline
          </label>
        </div>
        <div className="addTaskContainer">
          <button className="addTaskBtn">
            <span className="addTaskText">add it</span>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </form>
    );
  }
}

export default AddTask;
