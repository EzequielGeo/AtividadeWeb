import { getAllTasks } from "./func.js";

function showAllTasksResult() {
    const allTasks = getAllTasks();
    $("#result").html(JSON.stringify(allTasks));
}

export { showAllTasksResult }