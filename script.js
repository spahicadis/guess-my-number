let computerNumber = generateRandomNumber();
let userNumber = null;
let score = 20;
let highScore = null;

function generateRandomNumber() {
  return Math.floor(Math.random()*20);
}

function checkNumbers() {

  let backgroundImage = document.body
  let randomNumberIs = document.querySelector('.randomNumberIs');
  let status = document.querySelector('.status');
  let currentScore = document.querySelector('.score');
  let finishScore = document.querySelector('.highScore')
  let inputElement = document.querySelector('.input-js')
  let elementValue = inputElement.value;

  if(elementValue == computerNumber) {
    backgroundImage.classList.add('correct')
    randomNumberIs.innerHTML = computerNumber;
    status.innerHTML =  `🎉 Corect Number!`
    finishScore.innerHTML = `${currentScore.innerHTML}`;
  } else if(elementValue > computerNumber) {
    status.innerHTML = '📈 Too high!';
    currentScore.innerHTML = `${--score}`;
  } else if(elementValue < computerNumber) {
    status.innerHTML = `📉 Too low!`
    currentScore.innerHTML = `${--score}`;
  }
}

const buttonAction = document.querySelector('.btn-action-js')

buttonAction.addEventListener('click', checkNumbers);

function resetScreen() {
  let backgroundImage = document.body
  let randomNumberIs = document.querySelector('.randomNumberIs')
  let status = document.querySelector('.status');
  let currentScore = document.querySelector('.score');
  let finishScore = document.querySelector('.highScore');
 inputElement = document.querySelector('.input-js');
  

  backgroundImage.classList.add('reseted');
  randomNumberIs.innerHTML = `?`;
  status.innerHTML = `Start gusessing...`
  currentScore.innerHTML = 20;
  finishScore.innerHTML = `0`
  inputElement.value = "";


}

const buttonAgain = document.querySelector('.again') 
buttonAgain.addEventListener('click', resetScreen);


