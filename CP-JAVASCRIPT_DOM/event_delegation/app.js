const form = document.querySelector('#form')
// input realtime with event n dom
const input = document.querySelector('input')
const list = document.querySelector('#notes')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const noteValue = input.value
    const newList = document.createElement('li')
    newList.innerText = noteValue
    list.append(newList)
    input.value = ''
})

list.addEventListener('click', (e) => {
    // e.target.remove()
    // for agar element tmbahan tdk terapus seperti pada list form gunakan code ini
    e.target.nodeName === 'LI' && e.target.remove()
})

// const lis = document.querySelector('li')
// // buat perulangan for
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove()
//     })
// }


