var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('excluir');

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

        linkElement.setAttribute('href', '#')

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        
    }

};

renderTodos();

function addTodo(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
};

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('listTodos', JSON.stringify(todos))

}

buttonElement.onclick = addTodo;