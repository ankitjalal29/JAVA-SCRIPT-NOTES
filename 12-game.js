const score= JSON.parse( localStorage.getItem('score'))||
    {
    wins:'',
    losses:'',
    ties:''
    };
    let isAutoPlaying=false;
    let intervalId;
// const autoPlay=()=>{


// }

    function autoPlay(){
      if(!isAutoPlaying){
      intervalId= setInterval(()=>{
        const playermove=pickComputermove(); 
         pointsResult(playermove);
      },1000);
      isAutoPlaying=true;
    }
    else{
      clearInterval(intervalId);
      isAutoPlaying=false;
    }
  }
const buttonElement =  document.querySelector('.js-rock');
buttonElement.addEventListener('click',()=>{
  pointsResult('rock');
});

document.querySelector('.js-paper').addEventListener('click',()=>{
  pointsResult('paper');
});
document.querySelector('.js-scissor').addEventListener('click',()=>{
  pointsResult('scissors');
});

document.body.addEventListener('keydown',(event)=>{
if(event.key==='r'){
pointsResult('rock');
}
else if (event.key==='p'){
  pointsResult('paper');
}
else if (event.key==='s'){
  pointsResult('scissors');
}
}

);

    function pointsResult(playermove) {
       const computerMove= pickComputermove();
        let result='';
       if(playermove==='scissors'){
      if (computerMove === 'rock') {
        result = 'you lose.';
      }
      else if (computerMove ==='paper' ) {
        result = 'you win.';
      }
      else  {
        result = 'tie.';
      }
    }
      else if(playermove==='rock'){
      if (computerMove ==='rock') {
        result = 'tie.';
      }
      else if (computerMove ==='paper' ) {
        result = 'you lose.';
      }
      else {
        result = 'you win.';
      }
    }
     else if(playermove==='paper'){
      if (computerMove === 'rock') {
        result = 'you win.';
      }
      else if (computerMove ==='paper' ) {
        result = 'tie.';
      }
      else{
        result = 'you lose.';
      }
    }
    if(result==='you win.'){
     score.wins++;
}
else if(result==='you lose.'){
 score.losses++;
}
else if (result==='tie.'){
  score.ties++;
}
      
localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.resultOftheGame').innerHTML=`${result}`;
  document.querySelector('.move').innerHTML=` you
    <img src="${playermove}-emoji.png"class="move-icon">

  <img src="${computerMove}-emoji.png" alt="" class="move-icon">
  computer`;
  document.querySelector('.showResult').innerHTML=`wins: ${score.wins},losses: ${score.losses},ties: ${score.ties}.`;
    }

    function pickComputermove() {

      const randomNumber = Math.random()
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      }
      else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      }
      else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }
      return computerMove;
    }