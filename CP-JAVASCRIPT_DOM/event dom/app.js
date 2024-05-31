const button = document.querySelector('#clickme')
button.onclick = function(){
    console.log('You Clicked Me')
}

button.onmouseover = function(){
    console.log('Dont touch me')
}
// atau bisa jg seperti ini
const scream = () => {
    console.log('Dont touch me')
}
button.onmouseover = scream

// EVENET LISTENER
const eventbtn = document.querySelector('#eventbtn')
eventbtn.addEventListener('click', function(){
    alert('clicked')
})
// eventbtn.addEventListener('click', stepSatu)





