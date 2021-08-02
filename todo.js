let addBTN, myList,inputField;

document.addEventListener("DOMContentLoaded", function () {
    addBTN = document.getElementsByTagName("button")[0];
    myList = document.getElementsByTagName("ul")[0];
    inputField = document.getElementsByTagName("input")[0];
    addBTN.addEventListener("click", addItem);
    inputField.addEventListener('keyup', onKeyPress)
    myList.addEventListener('click',removeItem);
    inputField.addEventListener('click',focus);
});


// add item on the page
function addItem() {
    const li = document.createElement("li");
    const addedItem = document.createElement("span");
    const button = document.createElement("i");
    button.classList.add("far","fa-trash-alt","remove");
    addedItem.innerHTML = document.getElementsByTagName("input")[0].value;
    li.appendChild(addedItem);
    li.appendChild(button);
    myList.appendChild(li);
    clearField();
}

// on enter and on click
function onKeyPress(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      addItem();
    }
  };
// clear input field
function clearField() {
    document.getElementsByTagName("input")[0].value = "Add a item";
}

function focus() {
    document.getElementsByTagName("input")[0].value = "";
}




// remove item 
function removeItem(e){
    // e.target is the clicked element!
    if(e.target && e.target.matches("i.remove")) {
        let toRemove = e.target.parentNode;
        myList.removeChild(toRemove);
    }
};