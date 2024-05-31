const form = document.querySelector('#form')
// input realtime with event n dom
const input = document.querySelector('input')
const list = document.querySelector('#notes')

// Event Input Dan Change Pada Form: utk mengubah inputan didalam form
// change
input.addEventListener('change', (e) => {
    console.log('Nilai Berubah')
})
// input
input.addEventListener('input', (e) => {
    document.querySelector('h1').innerText = input.value
    console.log('Nilai Berhasil Diinput')
})



form.addEventListener('submit', function(e){
    e.preventDefault()
    const noteValue = input.value
    const newList = document.createElement('li')
    newList.innerText = noteValue
    list.append(newList)
    input.value = ''

    // console.log(newList)
    // console.log('submitted form')
})



document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Harusnya ke google')
})

// preventDefault: mencegah interaksi behavior/action element, membuat proses/data, ambil data tnpa reflesh hlman 

