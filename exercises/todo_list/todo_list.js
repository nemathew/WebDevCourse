let command = prompt("What would you like to do?")

let todo_list = [];

while(command !== 'quit'){
    switch(command){
        case "new":
            let new_todo = prompt("What would you like to add to your list?");
            todo_list.push(new_todo)
            console.log(`${new_todo} added to list`)
            break;
        case "list":
            console.log("**************")
            for (let i = 0; i < todo_list.length; i++){
                console.log(`${i}: ${todo_list[i]}`)
            }
            console.log("**************");
            break;
        case "delete":
            let deleted_item = prompt("What is the index of the item you would like to delete ?");
            todo_list.splice(deleted_item, 1);
            console.log("Todo Removed")
            break;
        default:
            break;
    }

    command = prompt("What would you like to do?")
}

console.log("Goodbye...")