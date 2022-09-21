const task= [];
const addbtn = document.getElementById('addbtn');
const removebtn = document.getElementById('removebtn');
var display=document.querySelector('.display');
var consoleDislplay=document.querySelector('.display-console');
var userInput;
addbtn.addEventListener("click",(e)=>{
    userInput=document.getElementById('input');
    var input =userInput.value;
    task.push(input);
    display.innerHTML='';
    displayTodoList();
});

consoleDislplay.addEventListener('click',e=>{
    console.log('Final Todo list',task);
})

const displayTodoList=()=>{
    task.forEach(val=>{
        display.innerHTML+=`
        <div class='todo-list'>
            <input class='todo-list__input' value=' ${val}' disabled/>
            <div class='todo-list__btn'>
                <button class='todo-list__btn--edit' id='edit' >
                    Edit
                </button>
                <button class='todo-list__btn--delete'id='delete'>
                    Delete
                </button>
            </div>
        </div>
         ` ;
         userInput.value='';
    });
}
        
   
