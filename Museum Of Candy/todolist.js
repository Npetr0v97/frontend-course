const toDoList = [];
let option;

while (true) {
  option = prompt(
    `Instructions:\n-"new" - Add A Todo\n-"list" - List All Todos\n-"delete" - Remove Specific Todo\n-"quit" - Quit App`
  );

  if (option.toLowerCase() === "quit") {
    //quit
    console.log("You have successfully quit the app");
    break;
  } else if (option.toLowerCase() === "new") {
    //add new items
    toDoList.push(prompt("Write down your Todo"));
  } else if (option.toLowerCase() === "list") {
    //display all items
    console.log("*****************");
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i + 1}: ${toDoList[i]}`);
    }

    console.log("*****************");
  } else if (option.toLowerCase() === "delete") {
    //delete an item by index
    let indexOfElement = prompt("Choose a Todo");
    if (
      Number(indexOfElement) >= 1 &&
      Number(indexOfElement) <= toDoList.length
    ) {
      console.log(
        `Succesfully removed "${toDoList.splice(
          indexOfElement - 1,
          1
        )}" from the Todo list`
      );
    } else {
      console.warn(
        `An element with the index of ${indexOfElement} doesn't exist. Try again!`
      );
    }
  } else {
    console.warn(`"${option}" doesn't match any of the instructions.`);
    //text doesn't match any criteria
  }
}
