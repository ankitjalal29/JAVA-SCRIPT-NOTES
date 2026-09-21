  const listTodo = [{
    name: 'make dinner',
    dueDate:' 2022-08-01'
  }
    , {
      name: 'wash dishes',
    dueDate: ' 2022-08-01'
  }];
  renderTodo();
  function renderTodo() {
    let elementHtml = '';
    listTodo.forEach((number,index) => {
      const name=number.name;
      const dueDate=number.dueDate;
      const html = `<div>${name}</div><div> ${dueDate}</div> <button class="col js-delete-button" >delete</button>`;
      elementHtml += html;
    }
    );
    document.querySelector('.input-div').innerHTML = elementHtml;

      document.querySelectorAll('.js-delete-button').forEach((deletebutton,index)=>{
deletebutton.addEventListener('click',()=>{
  listTodo.splice({index},1); renderTodo();
})
      });
  };

  const todolist = [];
document.querySelector('.js-add-button').addEventListener('click',()=>{
  addList();
});

  function addList() {
    const element = document.querySelector('.js-input-name');
    const name = element.value;

   const dueElement= document.querySelector('.js-input-todo');
    const dueDate=dueElement.value;
    listTodo.push({name,dueDate});
    element.value = '';
    renderTodo();
  };

