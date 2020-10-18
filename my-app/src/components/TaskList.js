import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { getTaskByFilter } from "../redux/selectors";

const TaskList = ({ tasks }) => (
  <ul className="task-list">
    {tasks && tasks.length
      ? tasks.map((task, index) => {
          return <Task key={`task-${task.id}`} task={task} />;
        })
      : "You have no tasks!"}
  </ul>
);

const mapStateToProps = state => {
  const { Filters } = state;
  const tasks = getTaskByFilter(state, Filter);
  return { tasks };
};

export default connect(mapStateToProps)(TaskList);