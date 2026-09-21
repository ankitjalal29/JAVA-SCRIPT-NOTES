  const result=document.querySelector('.js-button').classList.contains('js-button');
console.log(result);

function hello(selector){
  const button=document.querySelector(selector);
if(!button.classList.contains('is-toggled')){
offPreviousButton();
  button.classList.add('is-toggled');
}
else{
  button.classList.remove('is-toggled')
}
};
function offPreviousButton(){
  const previousButton=document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}
