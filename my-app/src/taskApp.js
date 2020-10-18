import React from "react";
import AddTask from "./components/addTask";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import Nav from "./components/Nav"
import "./App.css";

export default function TaksApp() {
    return (
        <div className="task-app">
            <Nav/>
                 <h1>Your Tasks!</h1> <br/>
            <Filters /> <br></br>
            <AddTask />
            <TaskList />
        </div>
    )
}