const toDoInput = document.getElementById("toDoInput");
const addButton = document.getElementById("addButton");
let toDoItems = []
const toDoList = document.querySelector(".toDoList");
let deleteButtons  ;

function renderToDos(){
    toDoInput.value = "";
     toDoList.innerHTML = toDoItems
      //Logica para agregar addEventListener al boton 
      deleteButtons = document.querySelectorAll("#delete") 
      for (let i=0; i<deleteButtons.length; i++) {
          deleteButtons[i].addEventListener("click", function(){
              toDoItems=toDoItems.filter( function(toDo, index){
                  return toDo[i]!== toDo[index]
              })
              renderToDos();
          })
      }
}

function addItems () {
    toDoItems.push(`<li class="toDoItemContainer">${toDoInput.value}
    <div class="buttonContainer">
        <button id="check">Like</button>
        <button id="delete">Delete</button>
    </div>
    
   </li>`);
   }
   
addButton.addEventListener("click", function(){
        addItems();
        renderToDos();   
    })
