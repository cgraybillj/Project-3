import React from "react";
import addTask from "./components/addTask";
import taskList from "./components/TaskList";
import Filters from "./components/Filters";
import "./App.css";

export default function TaksApp() {
    return (
        <div className="task-app">
            <h1>Your Tasks!</h1>
            <addTask />
            <taskList />
            <Filters />
        </div>
    );
}