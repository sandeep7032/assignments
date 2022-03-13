let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('list');
let inputField = document.getElementById('input');

addToDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('click', function () {
        toDoContainer.removeChild(paragraph);
    })
})