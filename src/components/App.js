import React, { Component } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

class App extends Component {
  counter = 4;
  state = {
    tasks: [
      {
        id: 0,
        text: "wash the car",
        date: "2020-09-15",
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "buying a present",
        date: "2020-07-09",
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "feed the cat",
        date: "2020-04-03",
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "learn redux",
        date: "2020-05-30",
        active: true,
        finishDate: null
      }
    ]
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({ tasks });
  };

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({ tasks });
  };

  addTask = (text, date) => {
    const task = {
      id: this.counter,
      text,
      date,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };
  render() {
    return (
      <div className="app">
        <Header />
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
