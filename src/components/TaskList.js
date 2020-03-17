import React from "react";
import Task from "./Task";
import toDo from "../assets/todo.svg";
import toDo_done from "../assets/todo_done.svg";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = ({ tasks, deleteTask, change }) => {
  //creatin collection of active and done tasks

  const active = tasks.filter(task => task.active);
  const done = tasks.filter(task => !task.active);

  //sorting methods

  active.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  done.sort((a, b) => a.finishDate - b.finishDate);

  //creating particular task lists

  const activeTaskList = active.map(task => (
    <Task key={task.id} task={task} deleteTask={deleteTask} change={change} />
  ));
  const doneTaskList = done.map(task => (
    <Task key={task.id} task={task} deleteTask={deleteTask} change={change} />
  ));

  return (
    <div className="tasksContainer">
      <div className="activeTasks">
        <div className="title">
          <img src={toDo} alt="" />
          <span className="text">to do</span>
        </div>
        {activeTaskList.length > 0 ? activeTaskList : null}
      </div>
      <div className="doneTasks">
        <div className="title title--done">
          <img src={toDo_done} alt="" />
          <span className="text">done ({done.length})</span>
        </div>
        {doneTaskList.length > 0 ? doneTaskList : null}
      </div>
    </div>
  );
};

export default TaskList;
