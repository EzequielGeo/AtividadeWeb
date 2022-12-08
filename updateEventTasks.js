import { updateTasks } from "./func.js";
import { returnValues } from "./returnValues.js";
import { showAllTasksResult } from "./showAllStudentsResult.js";
import { clearData } from "./clearData.js";

function updateData() {
    $("#update").on("click", function() {
        const returnedValues = returnValues();
        updateTasks(returnedValues.id, returnedValues.dat, returnedValues.hoin, 
            returnedValues.hot, returnedValues.eve, returnedValues.des, returnedValues.st);
        showAllTasksResult();
        clearData();
    })
}

export { updateData }