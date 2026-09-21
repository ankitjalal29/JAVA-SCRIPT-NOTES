let score = JSON.parse(localStorage.getItem('score')) || {

  wins: 0,
  losses: 0,
  tie: 0


};
updateScoreElement();

let isAutoPlay = false;
let interValidId;
function Autoplay() {
  if (!isAutoPlay) {
    interValidId = setInterval(function () {
      const playgame = pickpoints();
      palyermove(playgame);
    }, 1000);
    isAutoPlay = true;
  }
  else {
    clearInterval(interValidId);
    isAutoPlay = false;

  }


};

document.querySelector('.js-rock').addEventListener('click',()=>{
palyermove('rock');
});
document.querySelector('.js-paper').addEventListener('click',()=>{
  palyermove('paper')
});
document.querySelector('.js-scissors').addEventListener('click',()=>{
palyermove('scissors');
});

document.body.addEventListener('keydown',(event) => {
  if(event.key==='r'){
    palyermove('rock');
  }
  else if (event.key==='p'){
    palyermove('paper');
}
else if(event.key==='s'){
  palyermove('scissors');
}
});


function palyermove(playgame) {
  const computermove = pickpoints();
  let result = '';
  if (playgame === 'rock') {
    if (computermove === 'rock') {
      result = 'tie';
    }
    else if (computermove === 'paper') {
      result = 'lose';

    }
    else if (computermove === 'scissors') {
      result = 'win';
    }
  }

  else if (playgame === 'paper') {
    if (computermove === 'rock') {
      result = 'win';
    }
    else if (computermove === 'paper') {
      result = 'tie';

    }
    else if (computermove === 'scissors') {
      result = 'lose';
    }

  }
  else if (playgame === 'scissors') {

    if (computermove === 'rock') {
      result = 'win';
    }
    else if (computermove === 'paper') {
      result = 'tie';

    }
    else if (computermove === 'scissors') {
      result = 'lose';
    }

  }



  if (result === 'win') {
    score.wins += 1;
  }
  else if (result === 'lose') {
    score.losses += 1;
  }
  else if (result === 'tie') {
    score.tie += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();


  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move')
    .innerHTML = ` you
    <img class="img" src="${playgame}-emoji.png" alt="">
  <img class="img" src="${computermove}-emoji.png" alt="">
  computer`;

}

function updateScoreElement() {

  document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}.`;
}

function pickpoints() {
  const randomnumber = Math.random();
  let computermove = '';
  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    computermove = 'rock';
  }
  else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    computermove = 'paper';
  }
  else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    computermove = 'scissors';
  }
  return computermove;
}