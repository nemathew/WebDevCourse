const buttons = document.querySelectorAll('button')

const spans = document.querySelectorAll('span')

function randomColor(){
    colors = []
    for(let i = 0; i < 3; i++){
        colors.push(Math.floor(Math.random() * 255) + 1)
    }

    const rgbString = `rgb(${colors[0]},${colors[1]},${colors[2]})`

    return rgbString
}

function colorize(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

for (let btn of buttons){
    btn.addEventListener('click', colorize)
}

for (let span of spans){
    span.addEventListener('click', colorize)
}