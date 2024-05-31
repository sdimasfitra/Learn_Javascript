// EVENT OBJECT: Sangat digunakan utk membuat shortcut pd aplikasi


document.querySelector('button').addEventListener('click', (e) => {
    console.log(e)
})

const input = document.querySelector('input')
// keydown: setiap tekan keyboard maka proses berjalan
input.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'ArrowUp': console.log('Tombol Arah Atas')
        break;
        case 'ArrowDown': console.log('Tombol Arah Bawah');
        break;
        default: console.log('Diabaikan')
    }
})

// keyup: berjalan if tombol keyboard dilepas/tdk ditekan
// input.addEventListener('keyup', () => {
//     console.log('Tombol Dirilis')
// })




