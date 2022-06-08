'use strict';
// variables
let userNumber = prompt('Choose a number between 1 and 100', 16);
let container = document.querySelector('.container');
let reset = document.querySelector('button');
let color = randomColor();

// Random color generator
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  console.log(r);
  const g = Math.floor(Math.random() * 255);
  console.log(g);
  const b = Math.floor(Math.random() * 255);
  console.log(b);
  return `${r + ',' + g + ',' + b}`;
}

// Append grid square
function addSquare() {
  let newSquare = document.createElement('div');
  container.append(newSquare);
  newSquare.setAttribute('class', 'square');
}

// Custom grid formation
function makeGrid() {
  let width = container.offsetHeight;
  let sides = width / userNumber;

  for (let i = 0; i < userNumber ** 2; i++) {
    addSquare();
  }

  // Color tracing
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', function (event) {
      event.target.style.background = `rgba(${color})`;
    });
    container.style.gridTemplateColumns = `repeat(${userNumber},${
      sides + 'px'
    })`;
    container.style.gridTemplateRows = `repeat(${userNumber},${sides + 'px'})`;
  });
}
makeGrid();

// Reset etch a sketch
reset.addEventListener('click', function () {
  color = randomColor();
  userNumber = prompt('Choose a number between 1 and 100', 16);

  //delete all squares
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.remove();
  });

  makeGrid();
});
// 6. call grid forming functions
