import { addData } from "./addTasks.js";
import { findData } from "./findTasks.js";
import { updateData } from "./updateEventTasks.js";
import { removeData } from "./removeTasks.js";

function loadDados() {

    addData();
    findData();
    updateData();
    removeData();
}



export { loadDados }