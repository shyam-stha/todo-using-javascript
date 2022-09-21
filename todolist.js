const task= [];
const addbtn = document.getElementById('addbtn');
const removebtn = document.getElementById('removebtn');
var display=document.querySelector('.display')
addbtn.addEventListener("click",(e)=>{
    
    const input =document.getElementById('input').value;
    task.push(input);
    task.forEach((val)=>{
        let value= val;
        display.innerHTML= value;
        console.log(value)
    });
})
        
       
        
   

