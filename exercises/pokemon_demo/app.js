// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container')
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
// container.setAttribute('display', 'inline')

for (let i = 1; i <= 100; i++){ 
    const newDiv = document.createElement('div')
    newDiv.classList.add('pokemon')
    
    const newSprite = document.createElement('img')
    newSprite.src = `${baseURL}${i}.png`
    
    const newSpan = document.createElement('span')
    newSpan.innerText = `${i}`

    newDiv.appendChild(newSprite)
    newDiv.appendChild(newSpan)

    container.appendChild(newDiv)
}