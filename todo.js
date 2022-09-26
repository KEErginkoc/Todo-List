// Tüm Elementleri Seçme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const ClearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addTodo);




}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    console.log(newTodo);
    
    addTodoToUI(newTodo);

    

    e.preventDefault();
}

function addTodoToUI(newTodo){ // String değerini list item olarak UI'ya ekleyecek.
    
    // List Item Oluşturma
    const listItem = document.createElement("li");
    
    // Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between"
   
    //Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Todo List'e List Item'ı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";

}