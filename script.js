// 01-Add to Cart 

let addCart = document.getElementById('btn--add-cart');
let add2 = document.getElementById('btn--add-2');
let add3 = document.getElementById('btn--add-3');
let resetCart = document.getElementById('btn--reset-cart');
let cart = document.getElementById('btn--quantity-cart');

let sum = 0;


function cartAdd() {
  sum++;
  cart.innerText = `Cart Quantity: ${sum}`;
}

function addTwo() {
  sum += 2
  cart.innerText = `Cart Quantity: ${sum}`;
}

function addThree() {
  sum += 3;
  cart.innerText = `Cart Quantity: ${sum}`;
}

function cartReset () {
  sum = 0;
  cart.innerText = `Cart Quantity: ${sum}`;
}

// 02-Calculator



// 03-Rock Paper Scissors (BOOLEANS)
let computerPlayer = '';
let result = '';

let rockBtn = document.getElementById('btn--rock');
let paperBtn = document.getElementById('btn--paper');
let tvResult;

let tvDisplay = document.getElementById('title--to-score');
let rockImage = document

function randomNumberGen() {
  const randomNumber = Math.random();
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    
    computerPlayer = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerPlayer = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerPlayer = 'scissors'
  }
  
}


function rockChoice() {
  randomNumberGen();
  
  if (computerPlayer === 'rock') {
    result = 'tie';
  }
  else if (computerPlayer === 'paper') {
    result = 'lose';
  } 
  else if (computerPlayer === 'scissors') {
    result = 'win';
  }
  
  tvDisplay.style.fontSize = '24px';
  tvDisplay.innerText = `player: rock
  computer: ${computerPlayer}
  result: ${result}`;
}

function paperChoice() {
  randomNumberGen();
  
  if (computerPlayer === 'rock') {
    result = 'win';
  }
  else if (computerPlayer === 'paper') {
    result = 'tie';
  } 
  else if (computerPlayer === 'scissors') {
    result = 'lose';
  }
  
  tvDisplay.style.fontSize = '24px';
  tvDisplay.innerText = `player: paper
  computer: ${computerPlayer}
  result: ${result}`;
}


function scissorsChoice() {
  randomNumberGen();
  
  if (computerPlayer === 'rock') {
    result = 'lose';
  }
  else if (computerPlayer === 'paper') {
    result = 'win';
  } 
  else if (computerPlayer === 'scissors') {
    result = 'tie';
  }
  
  tvDisplay.style.fontSize = '24px';
  tvDisplay.innerText = `player: scissors
  computer: ${computerPlayer}
  result: ${result}`;
}