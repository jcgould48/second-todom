// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
const todos = [];

// Rewrite your print todo function to put the todo on the dom instead of in the console.
function printTodo(todo) {
  // Use `document.createElement` to make an li
  const li = document.createElement('li');

  // Put that todo string that you took in as a parameter as text inside the li tag. Don't use innerHTML!
  li.innerText = todo + " " + new Date();

  // Put the ul that's already in our html file in a variable.
  const ul = document.querySelector('.todo-list');

  // Append the li we made to the ul as the last child.
  ul.appendChild(li);
}


// Add an event listener to the ADD button to run a function that we'll write shortly that adds todos.


// Add an event listener to the REMOVE button to run a function that we'll write shortly that removes todos.
const removeButton = document.querySelector('.remove-todo');
removeButton.onclick = removeFromList;




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

// NOW. You can go back up two functions to where we left off in our remove-one-item-from-the-list function, run your erase-everything-from-the-list function, and then call your function that prints everything individually.
// That print function should be calling your print-one-item function, and if that's adding it to the list, you've got it!
// The way I named functions, this means now adding only two lines back up there:
// clearList();
// printList();



// A function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!
function printList() {
  let i = 0;
  while (i < todos.length) {
    printTodo(todos[i]);
    i = i + 1;
  }
}

// A function that adds an item to our todo list.
// Where on the list should we add it?
function addTodo(todo) {
  todos.push(todo);
}

// A function that removes an item at a given index from our todo list.
function removeTodo(i) {
  todos.splice(i, 1);
}