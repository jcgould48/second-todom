// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
const  todos = [];

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