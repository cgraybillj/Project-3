import React from "react";
import navBar from "./components/NavBar"
import addTask from "./components/AddTask";
import taskList from "./components/TaskList";
import Filters from "./components/Filters";
import "./App.css";

export default function TaksApp() {
    return (
        <div className="task-app">
            <navBar />
            <h1>Your Tasks!</h1>
            <addTask />
            <taskList />
            <Filters />
        </div>
    );
}