let addBTN, myList, inputField;
const url = "http://localhost:5000/todos";

document.addEventListener("DOMContentLoaded", function () {
    getToDos();


    addBTN = document.getElementsByTagName("button")[0];
    myList = document.getElementsByTagName("ul")[0];
    inputField = document.getElementsByTagName("input")[0];
    addBTN.addEventListener("click", addToDo);
    inputField.addEventListener('keyup', onKeyPress)
    myList.addEventListener('click', removeItem);
    inputField.addEventListener('click', focus);
    clearField("Add a item");
});


function getToDos() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const todos = data.todos;
            todos.forEach(todo => {
                addItem({todo});
            });
        })
}

function addToDo() {
    let todo = document.getElementsByTagName("input")[0].value
    console.log(JSON.stringify(todo));
    fetch(url, {
            method: 'POST',
            body: JSON.stringify({todo}),
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
            }
        })
        .then(response => response.json())
        .then(addItem)
        .catch(function(err){
            console.log(err);
        })
}

// add item on the page
function addItem(data) {
    console.log(data)
    const todo = data.todo;
    const li = document.createElement("li");
    const addedItem = document.createElement("span");
    const button = document.createElement("i");
    button.classList.add("far", "fa-trash-alt", "remove");
    // let todo = document.getElementsByTagName("input")[0].value
    addedItem.innerHTML = todo;
    li.appendChild(addedItem);
    li.appendChild(button);
    myList.appendChild(li);
    clearField("Add a new item");
    // addToDo(todo)
}

// on enter and on click
function onKeyPress(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        addItem();
        focus();
    }
};
// clear input field
function clearField(value) {
    document.getElementsByTagName("input")[0].value = value;
}

function focus() {
    document.getElementsByTagName("input")[0].value = "";
}




// remove item 
function removeItem(e) {
    // e.target is the clicked element!
    if (e.target && e.target.matches("i.remove")) {
        let toRemove = e.target.parentNode;
        myList.removeChild(toRemove);
    }
};