function removeFromList() {
    const inputBox = document.querySelector('.index-input');
    const userInput = inputBox.value;
  
    removeTodo(userInput);
    
    clearList();
    printList();
  }

function clearList() {
    const list = document.querySelector('.todo-list');
    
    while (list.hasChildNodes()) {
      list.firstChild.remove();
    }
  }

const removeButton = document.querySelector('.remove-todo');
removeButton.onclick = removeFromList;

document.querySelector('.clear-all').addEventListener('click', clearList)

