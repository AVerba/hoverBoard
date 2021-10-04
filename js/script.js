const board = document.querySelector('#board')
const colors= ['#ce5757','#eca049','#d4cb40d8','#84cc5ad8','#57c9d1d8','#5868c2d8','#c559c0d8','#a35b79d8']
const SQUARES_NUMBER=500

for (let i=0;i < SQUARES_NUMBER; i++){
const square = document.createElement('div')
square.classList.add('square')

square.addEventListener('mouseover', () => setColor(square))

square.addEventListener('mouseleave', () => removeColor(square))

board.append(square)
}

function setColor(element){
  const color  = getRandomColor()
 element.style.background = color
 element.style.boxShadow =`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background ='#000000d8'
    element.style.boxShadow =`0 0 2px #000`
}
 
function getRandomColor() {
const index = Math.floor(Math.random() * colors.length)
return colors [index]
}