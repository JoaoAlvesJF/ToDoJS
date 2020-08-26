var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

var todos = [
    'Fazer Café',
    'Estudar JS',
    'Estudar VueJS',
];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }

};

renderTodos();

function addTodo(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
};

buttonElement.onclick = addTodo;