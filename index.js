const toDoInput = document.getElementById("toDoInput");
const addButton = document.getElementById("addButton");
let toDoItems = []
const toDoList = document.querySelector(".toDoList");
let deleteButtons  ;

function renderToDos(){
 toDoList.innerHTML = toDoItems.join("");
 deleteTweets();
}

function addTweets () {
    toDoItems.push(`<li class="toDoItemContainer">${toDoInput.value}
    <div class="buttonContainer">
        <button id="check">Like</button>
        <button id="delete">Delete</button>
    </div>
    
   </li>`);
   toDoInput.value = "";
   toDoList.innerHTML = toDoItems
   }
   
function deleteTweets () {
 //Logica para agregar addEventListener al boton 
 deleteButtons = document.querySelectorAll("#delete") 
 for (let i=0; i<deleteButtons.length; i++) {
     deleteButtons[i].addEventListener("click", function(){
        //console.log("deleting")
         toDoItems=toDoItems.filter( function(toDo){
             return toDo!== toDoItems[i]
         })
         renderToDos();
     })
 }
}
addButton.addEventListener("click", function(){
        addTweets();
        renderToDos();   
    })

