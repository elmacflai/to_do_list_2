const toDoInput = document.getElementById("toDoInput");
const addButton = document.getElementById("addButton");
let toDoItems = []
const toDoList = document.querySelector(".toDoList");
let deleteButtons  ;

function renderToDos(){
    toDoInput.value = "";
     toDoList.innerHTML = toDoItems
     deleteButtons = document.querySelectorAll("#delete") 
     for (let i=0; i<deleteButtons.length; i++) {
         deleteButtons[i].addEventListener("click", function(){
             console.log(toDoItems);
             toDoItems=toDoItems.filter( function(toDo, index){
                 return toDo[i]!== toDo[index]
             })
             renderToDos();
         })
     }
}