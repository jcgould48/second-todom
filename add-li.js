const newLi = function(strClass) {
let addedItem = document.querySelector(strClass)
let newLi = document.createElement('li')
newLi.innerText = addedItem.value
document.querySelector('.todo-list').appendChild(newLi)
}