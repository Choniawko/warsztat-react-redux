import { ADD_TASK, TOGGLE_TASK } from './constans';

let taskId = 0;

export const addTask = (taskName) => ({
    type: ADD_TASK,
    payload: {
        id: taskId++,
        text: taskName
    }
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: { id }
})

export const decrement = {type: TOGGLE_TASK};