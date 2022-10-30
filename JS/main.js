const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const button5 = document.querySelector('#button5')
const img = document.querySelector('#img1')

button1.onclick = function () {
    img.classList.add('blur')
}

if (button1) {}

button2.onclick = function () {
   img.classList.add('hue-rotate')            
}

button3.onclick = function () {
   img.classList.add('grayscale')            
}

button4.onclick = function () {
    img.classList.add('brightness')           
}

button5.onclick = function () {
    img.classList.add('contrast')                
}


