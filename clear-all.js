
// Now write the function that the event listener will run. It will take what's in the user input and remove it from the todo list array.
function removeFromList() {
    // Place in a variable the node element for the remove todo input box.
    const inputBox = document.querySelector('.index-input');
  
    // Place in a variable the text that the user typed into that input box.
    const userInput = inputBox.value;
  
    // Remove the todo at that index from the array. We have a function for that!
    removeTodo(userInput);
    
    // Here's where we'll add some code in a minute, but... not yet!
    clearList();
    printList();
  }


  // Write a function that erases everything from the list.
function clearList() {
    // Grab the todo list ul and put it in a variable
    const list = document.querySelector('.todo-list');
  
    // Remove all children of that list.
    // My favorite way uses `.hasChildNodes()` and `.remove()` and `.firstChild`, but there are other ways if you wanna research them instead!
    while (list.hasChildNodes()) {
      list.firstChild.remove();
    }
  }


// Add an event listener to the REMOVE button to run a function that we'll write shortly that removes todos.
const removeButton = document.querySelector('.remove-todo');
removeButton.onclick = removeFromList;

document.querySelector('.clear-all').addEventListener('click', clearList)

