let tasks = {};

function addTasks(id, dat, hoin, hot, eve, des, st) {
    tasks[id] = {dat, hoin, hot, eve, des, st}
}

function chageTasks(id) {
    if (tasks[id]) {
        return tasks[id]
    } else {
        return null;
    }
}

function updateTasks(id, dat, hoin, hot, eve, des, st) {
    if (tasks[id]) {
        tasks[id] = {dat, hoin, hot, eve, des, st};
    } else {
        return null;
    }
}

function removeTasks(id) {
    if (tasks[id]) {
        delete tasks[id];
        return true;
    }
    return false;
}

function getAllTasks() {
    return tasks;
}

function dataLoad() {
    
    
}

export { addTasks, chageTasks, updateTasks, removeTasks, getAllTasks, dataLoad }