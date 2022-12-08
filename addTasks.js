import { addTasks } from "./func.js";
import { returnValues } from "./returnValues.js" ;
import { showAllTasksResult } from "./showAllStudentsResult.js";
import { clearData } from "./clearData.js";

function addData() {
    $("#add").on("click", function() {
        const returnedValues = returnValues();
        if (returnedValues.id) {
            addTasks(returnedValues.id, returnedValues.dat, returnedValues.hoin, 
                returnedValues.hot, returnedValues.eve, returnedValues.des, returnedValues.st);
        } else {
            return $("#result").html("erro: campo vazio");
           }

        showAllTasksResult()
        clearData();
    })
}
export { addData }