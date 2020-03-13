import React from "react";
import deleteBtn from "../assets/delete.svg";
import deleteBtnGrey from "../assets/delete_grey.svg";
import ok_black from "../assets/ok_black.svg";
import ok_white from "../assets/ok_white.svg";

const Task = ({ task, deleteTask, change }) => {
  const { text, date, id, active, finishDate } = task;

  //display elements conditions

  const doneIcon = active ? (
    <span className="doneTaskBtnActive" onClick={() => change(id)}>
      <img src={ok_black} alt="ok"></img>
    </span>
  ) : (
    <span className="doneTaskBtn">
      <img src={ok_white} alt="ok"></img>
    </span>
  );

  const deleteIcon = active ? (
    <img src={deleteBtn} alt="X" />
  ) : (
    <img src={deleteBtnGrey} alt="X" />
  );

  const finish = new Date(finishDate).toISOString().slice(0, 10);

  const deadline = active ? (
    <span>deadline {date}</span>
  ) : (
    <span>finished {finish}</span>
  );

  const taskName = active ? (
    <p className="taskName" onClick={() => change(id)}>
      {text} <span className="deadlineDate">({deadline})</span>
    </p>
  ) : (
    <p className="taskName">
      {text} <span className="deadlineDate">({deadline})</span>
    </p>
  );

  return (
    <div className={active ? "singleTask" : "singleTask singleTask--done"}>
      {doneIcon}
      {taskName}
      <button className="deleteTaskBtn" onClick={() => deleteTask(id)}>
        {deleteIcon}
      </button>
    </div>
  );
};

export default Task;
