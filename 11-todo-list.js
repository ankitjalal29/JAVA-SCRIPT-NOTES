const todoList=[


]

;
function addTodo(){
  const element=document.querySelector('.js-input');
  const todoElement=element.value;
  todoList.push(todoElement);
  console.log(todoList);
  element.value='';

}
