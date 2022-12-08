import { chageTasks } from "./func.js";
import { returnValues } from "./returnValues.js" ;
import { clearData } from "./clearData.js";

function findData() {
    $("#chage").on("click", function() {
        const returnedValues = returnValues();
        const found = chageTasks(returnedValues.id);
        if (found) {
            $("#result").html(JSON.stringify(found));
        } else {
            $("#result").html(`Id: ${id} was not found!`);
        }
        clearData();
    })
}

export { findData }