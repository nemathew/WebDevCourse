const colorButton = document.querySelector('button')

function changeColor(){
    const h1 = document.querySelector('h1')
    const body = document.querySelector('body')

    const randColor = randomColor();

    h1.innerText = randColor;
    body.style.backgroundColor = randColor;
}

function randomColor(){
    colors = []
    for(let i = 0; i < 3; i++){
        colors.push(Math.floor(Math.random() * 255) + 1)
    }

    const rgbString = `rgb(${colors[0]},${colors[1]},${colors[2]})`

    return rgbString
}

colorButton.addEventListener('click', changeColor)
