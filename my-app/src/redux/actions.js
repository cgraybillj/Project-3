import { ADD_TASK, SET_FILTER, TOGGLE_TASK } from "./actionTypes"

let nextTaskID = 0;

export const addTask = content => ({
    type: ADD_TASK,
    payload: {
        id: ++nextTaskID,
        content
    }
});

export const toggleTask = id => ({
    type: TOGGLE_TASK,
    payload: { id }
});

export const setFilter = filter => ({ 
    type: SET_FILTER,
    payload: { filter }
 })