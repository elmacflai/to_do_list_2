const toDoInput = document.getElementById("toDoInput");
const addButton = document.getElementById("addButton");
let toDoItems = []
const toDoList = document.querySelector(".toDoList");
let deleteButtons  ;
let likeButtons 

function renderToDos(){
 toDoList.innerHTML = toDoItems.join("");
 deleteTweets();
 likeTweets();
}

function addTweets () {
    toDoItems.push(`
    <li class="toDoItemContainer">
    <div>
    <span class="heartSymbol"></span>
    ${toDoInput.value}
    </div>
   
    <div class="buttonContainer">
        <button class="likeButtons">Like</button>
        <button class="delete">Delete</button>
    </div> 
   </li>
   `);
   toDoInput.value = "";
   toDoList.innerHTML = toDoItems
   }
   
function deleteTweets () {
 deleteButtons = document.querySelectorAll(".delete");
 deleteButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
         console.log("deleting");
         toDoItems.splice(index, 1);
         renderToDos();
         });
        });
    }
        

function likeTweets(){
    likeButtons = document.querySelectorAll(".likeButtons") 
    likeButtons.forEach((button) => {
        button.addEventListener("click", function() {
            console.log("like")
            const liElement = button.closest(".toDoItemContainer");
            const heartSymbol = liElement.querySelector(".heartSymbol");
            heartSymbol.textContent = "❤️";
        })
    })
}

addButton.addEventListener("click", function(){
    addTweets();
    renderToDos();   
});