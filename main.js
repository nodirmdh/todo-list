let list = document.querySelector('#app ol')
let input = document.querySelector('#app input')
let button = document.querySelector('#app button')
let todos = JSON.parse(localStorage.getItem("list_todos")) || [];
function renderTodos(){
    list.innerHTML= ''
    for(todo of todos){
        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)
        let linkElement = document.createElement('a')
        linkElement.setAttribute("href","#")
        let pos = todos.indexOf(todo)
        linkElement.setAttribute("onclick","deleteTodo(" + pos + ")");
        let linkText = document.createTextNode("done")
        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        list.appendChild(todoElement)
    }
}
renderTodos()
function addTodo(){
    let todoText = input.value;
    todos.push(todoText)
    input.value = ''
    renderTodos()
    saveToStorage()
}
button.onclick = addTodo
function deleteTodo(pos){
    todos.splice(pos,1)
    renderTodos()
    saveToStorage()
}
function saveToStorage(){
    localStorage.setItem("list_todos",JSON.stringify(todos))
}