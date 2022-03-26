/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 50;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-1';
  canvas.appendChild(div);
  count++;
}

let canvas = document.querySelector('.canvas');

let canvasBlocks = document.querySelectorAll('.canvas div');

let brushColor = document.querySelector('.current-brush');

let white = document.querySelector('.color-1');
let black = document.querySelector('.color-2');
let red = document.querySelector('.color-3');
let orange = document.querySelector('.color-4');
let green = document.querySelector('.color-5');
let purple = document.querySelector('.color-6');
let yellow = document.querySelector('.color-7');
let cyan = document.querySelector('.color-8');
let blue = document.querySelector('.color-9');

let pallete = document.querySelectorAll('.brush-selection div');

// pallete.forEach(Element => {
//   Element.addEventListener('click', function(){
//     brushColor.className = `current-brush ${Element.classList[1]}`;
//   })
// })

pallete.forEach(Element => {
  Element.addEventListener('click', function(){
    brushColor.classList.replace(brushColor.classList[1], Element.classList[1]);
  })
})

// white.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-1';
//   brushColor.className = `current-brush ${white.classList[1]}`;
// })

// black.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-2';
//   brushColor.className = `current-brush ${black.classList[1]}`;
// })

// red.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-3';
//   brushColor.className = `current-brush ${red.classList[1]}`;
// })

// orange.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-4';
//   brushColor.className = `current-brush ${orange.classList[1]}`;
// })

// green.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-5';
//   brushColor.className = `current-brush ${green.classList[1]}`;
// })

// purple.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-6';
//   brushColor.className = `current-brush ${purple.classList[1]}`;
// })

// yellow.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-7';
//   brushColor.className = `current-brush ${yellow.classList[1]}`;
// })

// cyan.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-8';
//   brushColor.className = `current-brush ${cyan.classList[1]}`;
// })

// blue.addEventListener('click', function(){
//   //brushColor.className = 'current-brush color-9';
//   brushColor.className = `current-brush ${blue.classList[1]}`;
// })

let mouseDownTracker = false;

document.addEventListener('mousedown', function(){
  mouseDownTracker = true;
})

document.addEventListener('mouseup', function(){
  mouseDownTracker = false;
})


for (let block of canvasBlocks){
  block.addEventListener('mousedown', function(event){
    event.target.className = `square ${brushColor.classList[1]}`;
  })
}

for (let block of canvasBlocks){
  block.addEventListener('mouseenter', function(event){
    if (mouseDownTracker === true){
      event.target.className = `square ${brushColor.classList[1]}`;
    }
  })
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
