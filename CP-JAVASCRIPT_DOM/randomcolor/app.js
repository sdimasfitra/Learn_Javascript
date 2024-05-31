const button = document.querySelector('button')
const h1 = document.querySelector('h1')

button.addEventListener('click', () => {
    const newColor = generateColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
    console.log(newColor)
})

// variable generate random color
const generateColor = () => {
    // rgb(255, 255, 255)
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}