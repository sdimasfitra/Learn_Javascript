// DOCUMENT OBJECT MODEL (DOM)

// DOM: struktur doc html or xml berbentuk tree oleh JS 
// -> ubah struktur, isi, or stil doc lewat JS 
// -> struktur hierarkis: child node dari elemen lain or child node / doc

// Liat isi DOM
// procedure: select dan manipulate
// Selecting with DOM: getElementById, getElementsByTagName, getElementsByClassName | example: document.getElementById
// document.quaryselector: for seleksi element

// 2. MANIPULATE
// Memahami Innerthtml, Innertext Dan Textcontent
// Properties n Methos yg penting diketahui
// classList | getAttribute() | setAttribute() | appendChild() | append() | prepend() | removeChild() | remove() | createElement() | innerText | textContent | innerHTML | value | parentElement | children | nextSibling | previousSibling | style

// Mendapatkan Attribute Yang Dimiliki Element Html
// cth: document.querySelector('#banner').attributes : for ambil atribut dari element banner.
// for buat atribute class baru pd element html
// codenya : banner.setAttribute('class', 'isian-class')

// STYLING with Javascript DOM
// code: const heading = document.querySelector('h1')
// for melakukan styling codenya: heading.style

// CLASSLIST for STYLING with DOM
// cth code: const h1 = document.querySelector('h1') -> h1.setAttribute('class','bg-info')
// better gunakan classList for tambahkan value class baru, codenya: h1.classList.add('border-danger') | hapus value class: h1.classList.remove | .contains

// Jelajahi ELEMENT PARENT, CHILD, n SIBLING
// const textBold = document.querySelector('b') | call: textBold.parentElement
// const paragraf = textBold.parentElement | call: paragraf.children[]
// const squareImg = document.querySelector('.square') -> call: squareImg.previousSibling | squareImg.nextSibling | squareImg.nextElementSibling 


// Memahami APPEND n APPENDCHILD
// buat 1 element dlm 1 doc: document.createElement('img')
// const newImg = document.createElement('img') -> console.dir(newImg) 
// for tmbahkan new element ke element yg sdh ada gunakan appendChild = document.body.appendChild(newImg) | for tmbahkan ke class: newImg.classList.add('square')
// appendChild: lebih ke doc html or Object html | append: dia menambahkan text n berada diakhir suatu content
// code append: const text = document.querySelector('p') | call: text.append('<b>cat</b>')
// const h2 = document.createElement('h2') -> pd console: h2.append('Ini cat') -> h1.insertAdjacentElement('afterend', h2)
// or bisa code seperti ini: h1.insertAdjacentElement('afterend', document.createElement('h2').append('Ini Cat'))

// ROMOVECHILD : harus kembali terlebih dahulu ke dalam parentElement
// code pd console: const firstList = document.querySelector('li') -> firstList.parentElement -> firstList.parentElement.removeChild(firstList)

// REMOVE: Method for menghapus Element
// code pd console: img.remove()
// NOTE: PENGHAPUSAN HANYA TERJADI PADA BROWSER TIDAK PADA SOURCECODE 


// EVENT PADA DOM
// Methodnya: click, drag, drop, hover, scroll, form submission, key press, focus/blur, mouse wheel, double click, copy, paste, audio, screen resize, print

// Jalankan EVENT pd INLINE ELEMENT

// FUNGSI EDDEVENTLISTENER: event spesifik untuk menjalankan Callback | fungsi: lebih bnyak function yg dpt dijalankan | lebih kompleks dari sekedar menambahkan event dari suatu element
const button = document.querySelector('#clickme')
button.addEventListener('Click', () => {
    alert('You clicked me')
})

// addEventListener Untuk Generate Color

// EVENT => Menindaklanjuti inputan or perintah client









