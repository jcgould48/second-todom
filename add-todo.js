const addButton = document.querySelector('.add-todo');
addButton.onclick = addToList;

// Now write the function that the event listener will run. It will take what's in the user input and add it to the todo list array.
function addToList() {
  // Place in a variable the node element for the add todo input box.
  const inputBox = document.querySelector('.todo-input');

  // Place in a variable the text that the user typed into that input box. You can "dot off" the variable above to find a property that's on that element. If you're not sure if you have it, try console logging what you've got!
  const userInput = inputBox.value;

  // Now put that todo string in your todo list. You have a function for that!
  addTodo(userInput);

  // Now use that print function to add the todo to the dom!
  printTodo(userInput);

  // Optionally but helpfully, set that input box's value back to an empty string to empty the box so you can type a different todo in there.
  inputBox.value = '';

}

// const firstList = document.querySelectorAll('.todo-list')

// const strike = function(){
//     firstList.style.textDecoration = 'line-through'
// }

// for(let i = 0; i < firstList.length; i++){
//     firstList[i].addEventListener('click',strike)
// }