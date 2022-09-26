const task= [];
const addbtn = document.getElementById('addbtn');
const removebtn = document.getElementById('removebtn');
var display=document.querySelector('.display');
var consoleDislplay=document.querySelector('.display-console');
var userInput;
// const input = getElementById('input');
// input.addEventListener('keyup',(e)=>{
//     let value= e.currentTarget.value;
//     addbtn.disabled = false;
//     if(value===""){
//         addbtn.disabled= true;
//     }
// })

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
        <div class='todo-list'id='main'>
            <input class='todo-list__input' value=' ${val}' disabled/ id='input'>
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
    //   var editbtn= document.getElementById('edit');
    //   editbtn.addEventListener('click',()=>{
    //     console.log('clicked');
    //   })
    //     const main = document.getElementById('main');
    //       var input= document.getElementById('input');
    //       console.log('hi',input)
    //       main.forEach(val=>{
    //           input.disabled = false;
            
    //       })
    //     })
  
  //    const deletebtn= document.getElementById('delete');
  //    deletebtn.addEventListener('click', e=>{
  //    task.map(function(element){
  //     task.pop();
  //    })
  // })
          
        

