document.querySelector(".remove-todo").addEventListener('click',function(){
    const rmvItem = Number(document.querySelector(".index-input").value)
    let list = document.querySelector(".todo-list");
    list.removeChild(list.children[rmvItem]);
    clearSearch(".index-input")
    })