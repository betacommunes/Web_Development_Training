
const inputtask = document.getElementById('input_task');
const todocontainer = document.getElementById('todo_list');
const addbtn = document.getElementById('add_btn');

addbtn.addEventListener("click", function() {
   // addbtn console.log
   console.log(Math.random() * 10,'btn clicked')
   
   // create li & append it
   const todolists = document.createElement('li');
   const div = todocontainer.appendChild(todolists);
   console.log(todolists);

   
   // div = inputtask
   div.innerText = inputtask.value.trim();
   inputtask.value = "";

//    if (div === '') return;

   // styling li
   todolists.classList.add('eachlist');
   todolists.addEventListener("click", function(){
   todolists.style.textDecoration = "line-through";
   })

   //creating span for btn
   const btns = document.createElement('span');
   btns.classList.add('spans');
   const btn = todocontainer.appendChild(btns);
   console.log(btn);
   

   // btn edit & delete
   const editbtn = document.createElement('button');
   editbtn.innerText = 'Edit';
   editbtn.classList.add('edit');
   btn.appendChild(editbtn); 

   editbtn.onclick = function () {
       const newText = prompt('Edit todo:', todolists.innerText)
       if (newText !== null && newText.trim() !== '') {
      todolists.innerText = newText;
        todolists.style.textDecoration = "none";
    }
       
    
   }

   const deletebtn = document.createElement('button');
   deletebtn.innerText = 'Delete';
   deletebtn.classList.add('delete');
   btn.appendChild(deletebtn);

    deletebtn.onclick = function () {
        todolists.remove();
        btns.remove();

  };
})
    
