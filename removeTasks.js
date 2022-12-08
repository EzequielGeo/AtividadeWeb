import { removeTasks } from "./func.js";
import { returnValues } from "./returnValues.js";
import { showAllTasksResult } from "./showAllStudentsResult.js";
import { clearData } from "./clearData.js";

function removeData() {
    $("#remove").on("click", function() {
        const returnedValues = returnValues();
        if (returnedValues.id) {
        removeTasks(returnedValues.id) 
        } else {
            return $("#result").html("erro: campo vazio");
        }
        showAllTasksResult();
        clearData();
       
    })
}
export { removeData }