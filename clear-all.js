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