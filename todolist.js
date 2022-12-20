const task = [];
const addbtn = document.getElementById("addbtn");
const removeall = document.getElementById("removebtn");
var display = document.querySelector(".display");
var consoleDislplay = document.querySelector(".display-console");
var userInput;
var todolists;

addbtn.addEventListener("click", (e) => {
  userInput = document.getElementById("input");
  var input = userInput.value;
  if (input === "") {
    alert("Please Add Task,...");
  } else {
    task.push(input);
    display.innerHTML = "";
    displayTodoList();
  }
});

consoleDislplay.addEventListener("click", (e) => {
  console.log("Final Todo list", task);
});

const displayTodoList = () => {
  task.forEach((val) => {
    display.innerHTML += `
        <div class='todo-list'>
            <input class='todo-list__input' value=' ${val}' id='todo__list--edit-input' disabled/>
            <div class='todo-list__btn'>
                <button class='todo-list__btn--edit' >
                    Edit
                </button>
                <button class='todo-list__btn--delete'>
                    Delete
                </button>
                <button class='todo-list__btn--save' hidden>
                    Save
                </button>
                
            </div>
        </div>
         `;
    userInput.value = "";
  });
  getTodoList();
};

const getTodoList = () => {
  todolists = document.querySelectorAll(".todo-list");
  console.log("todol list all here", todolists);
  todolists.forEach((list, key) => {
    console.log("lists here", key);
    let editBtn = list.children[1].children[0];
    let delteBtn = list.children[1].children[1];
    let savebtn = list.children[1].children[2];

    editBtn.addEventListener("click", (e) => {
      savebtn.hidden = false;
      editinput = list.children[0];
      editinput.disabled = false;
      document.getElementById("todo__list--edit-input").focus();
    });

    delteBtn.addEventListener("click", (e) => {
      task.splice(key, 1);
      console.log(task);
      display.innerHTML = "";
      displayTodoList();
    });
    savebtn.addEventListener("click", (e) => {
      editinput.disabled = true;
      task.splice(key, 1, editinput.value);
      savebtn.hidden = true;
    });
  });
};
removeall.addEventListener("click", (e) => {
  task.length = 0;
  display.innerHTML = "";
});
