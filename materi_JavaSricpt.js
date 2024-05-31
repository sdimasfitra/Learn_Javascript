console.log('hello dunya');
console.log(1 + 3);
alert("I LOVE YOU RINDA");

// 1. if statement
// cth 1
let agee = 20;
if (age === 21) {
    console.log("boleh masuk...");
}

if (1 + 1 === 2) {
    console.log("perhitungan benar");
}

const condition = true; // if statement singkat
const result = condition ? 'Value true' : 'Value false';
console.log(result);

// cth 2
let angka = Math.random();
console.log(angka);
if (angka >= 0.5) {
    console.log("Angka lebih dari 0.5");
}
if (angka <= 0.5) {
    console.log("Angka kurang dari 0.5");
}

// 2. else if statement
// cth 1
const tooday = prompt('Isikan Hari!').toLowerCase();
const today = 'Thusday';
if (today === 'monday') {
    console.log('Enjoy kawan');
} else if (today === 'friday') {
    console.log('Traveling kawan');
} else { // else pilihan terakhir
    console.log('Semangat Bekerja Kawan..');
}

// cth 2
let age = 18;
if (age === 22) {
    console.log("Boleh masuk");
} else if (age === 18) {
    console.log("Masuk Bersama Orang tua..");
} else if (age === 15) {
    console.log("Tidak Boleh Masuk");
}

// cth 3
const nilai = '98';
if (nilai < 60) {
    console.log('NILAI E');
} else if (nilai < 70) {
    console.log('NILAI D');
} else if (nilai < 80) {
    console.log('Nilai C');
} else if (nilai < 90) {
    console.log('NILAI B');
} else if (nilai < 100) {
    console.log('NILAI A');
}

// if statement kondisi berlapis
const pass = prompt("Buat Password");
// password 6 karakter
if (pass.length >= 6) {
    if (pass.indexOf(' ') === -1) {
        console.log('Password Valid');
    } else {
        console.log('Password tidak boleh ada spasi');
    }
} else {
    console.log('Password harus 6 Karakter');
}

// 3. LOGICAL OPERATORS
// - cth AND -> &&
let usia = 24;
let gender = 'male';
if (gender === 'male' && usia === 24) {
    console.log("Legal Married!");
}
// cth 2 and
const pass2 = prompt('Buat Password');
if (pass.length >= 6 && pass2.indexOf(' ') === -1) {
    console.log('Password Valid');
} else {
    console.log('Password tidak memenuhi syarat');
}

// - Operator Or -> ||
// cth 1
let umur = 20;
if (umur === 20 || umur === 32) {
    console.log('BERHASIL');
}
// cth 2
const role1 = prompt('Masukan role Akun');
if (role1 === 'admin' || role1 === 'bos') {
    console.log('Boleh Mengaksesnya');
} else {
    console.log('Akses Ditolak');
}

// - Operator NOT -> !
// cth 1
const role2 = prompt('Masukan role Akun');
if (role2 !== 'admin') {
    console.log('Akses Ditolak');
} else {
    console.log('Boleh Mengaksesnya');
}

// 4. SWITCH for bnyak pilihan : ALTERNATIF IF STATEMENT
// cth 1
const balonkuu = prompt('Input Warna Balon');
const balonku = 'green';
switch (balonkuu) {
    case 'red':
        console.log('warna red');
        break;
    case 'green':
        console.log('dooorrr');
        break;
    default:
        console.log('bukan balonku');
}

// make a objects
const fitness = {
    steps: 12344,
    miles: 122.3,
    caloriesburn: 4222
}

// # Object dlm object | call object -> .
// add new object -> cth: produk.merk = 'apple'
const produk = {
    produk: 'Laptop',
    harga: 3000000,
    isReady: true,
    stok: ['2', '4', '6'],
    location: {
        jakarta: 55,
        padang: 89
    }
}

// # Call object on array -> student[0].exam
const student = { // cth 1
    firstName: 'Fitra',
    lastName: 'Andhika',
    strengths: ['foot', 'balls'],
    exam: {
        midterm: 98,
        final: 99
    }
}
// cth 2
const cart = [
    {
        product: 'vue.js',
        price: 788,
        quantity: 3
    },
    {
        product: 'react.js',
        price: 78,
        quantity: 3
    }
] // call object on array -> cart[0].price

// # PERULANGAN JS
// Tipe2 perulangan: for, while, for of, for in
// sintaks for || add -> +=
for (let i = 1; i <= 10; i++) {
    console.log('hello dunya');
    console.log(i);
}
// be carefull infinite loops in perulangan for

// # Perulangan with array -> alwalys awali value 0
const animals = ['cat', 'horse', 'mouse', 'chicken'];
for (let i = 0; i < animals.length; i++) {
    console.log(i + 1, animals[i]);
}

// # Nested Loop
let str = 'LOL';
for (let i = 0; i <= 4; i++) {
    console.log("Outer:", i);
    for (let j = 0; j < str.length; j++) {
        console.log('  Inner:', str[j]);
    }
}
// cth lain
const pilihan = 'abcd';
for (let a = 1; i <= 10; a++) {
    console.log(`${a}. Soal Nomor ${a}:`);
    for (let b = 0; b < pilihan.length; b++) {
        console.log(`    ${pilihan[b]}. Pilihan Jawaban`);
    }
}

// # Dptkan data from nested array with nested loop
const studentRow = [
    ['Rafael', 'Justin', 'Ivar'],
    ['Edo', 'Gilang', 'Daffa'],
    ['Bagas', 'Nathan', 'Farel'],
];
// # Penulisan for
for (let x = 0; x < studentRow.length; x++) {
    const row = studentRow[x];
    console.log(`Seat Row #${x + 1}`);
    for (let z = 0; z < row.length; z++) {
        console.log(`  ${row[z]}`);
    }
}
// penulisan for of: alternatif for
for (let row of studentRow) {
    for (let student of row) {
        console.log(student);
    }
}

// # SINTAKS PERULANGAN WHILE : akan berjalan terus selama value nya true
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}
// cth lain
const PASSWORD = 'Pass123';
let guess = prompt('Enter the password');
while (guess !== PASSWORD) {
    guess = prompt('Enter the password')
}
alert('Congrats! The password is correct');

// # Stop perulangan -> break
let input = prompt('Hey Tayo');
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop') break;
}
// cth lain
for (let s = 0; s < 1000; s++) {
    console.log(s);
    if (s === 100) break;
}

// # GAME TEBAK ANGKA WITH WHILE
let maximum = parseInt(prompt('Masukkan nilai maksimal'));
while (!maximum) {
    maximum = parseInt(prompt('Masukkan nilai maksimal'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let bro = parseInt(prompt('Isi tebakan pertama Anda'));
let attempts = 1;

while (parseInt(bro) !== targetNum) {
    attempts++;
    if (bro > targetNum) {
        bro = parseInt(prompt('Terlalu tinggi! tebak lagi:'));
    } else {
        bro = parseInt(prompt('Terlalu rendah! tebak lagi:'));
    }
}
alert(`Selamat Tebakkan Anda Benar! Dengan percobaan ${attempts} kali`);

// # sintaks for..of pd Js
// for..of alternatif penulisan for
for (variable of interable) {
    statement
}
// cth lain
const fruits = ['Banana', 'Orange', 'Apple'];
for (let fruit of fruits) {
    console.log(`Buah ${fruit}`);
}

// # Perulangan Pada Object Dengan Elegan For In
const studentScore = {
    fitra: 87,
    fandy: 98,
    dicky: 87,
    Maman: 78,
}
for (let student in studentScore) {
    console.log(`${student} memiliki skor ${studentScore[student]}`);
}
// hitung total skor student
let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);


// # FUNCTION JAVASCRIPT
// sering dipake, code yg bisa dipake lagi, dibuat diawal dan dipake nanti
// function digunakan pd saat code sering digunakan
//call function : namaFungsi()
function lempardadu() {
    console.log(Math.floor(Math.random() * 6) + 1);
}
// cth lain
function nyanyi() {
    console.log('Cek..');
    console.log('do re mi');
}

// # Parameter n argument = input function
function greet(name) { //parameter
    console.log(`Hi, ${name}`)
}
greet('Fitra') //argument
// multiple parameter n argument
function tambah(a, b) {
    const hasil = a + b;
    console.log(hasil);
}

// # Return function: mengakhiri proses dlm fungsi n akan memberikan value
function kurang(a, b) {
    const hasil = a - b;
    return hasil;
}

// # Scope function: visibilitas variable
let linux = 'Redhat'
function easyLinux() {
    let linux = 'Debian'
    linux; //Debian
}
linux; //Redhat

let programming = 'PHP'
function typeSafe() {
    let programming = 'dart';
    console.log(programming);
}
typeSafe();
console.log(programming);

//blocked scope var
// let n const: memiliki blocked scope nya masing2
// var bisa difinisikan variable nya n blocked scope dpt di call diluar scope

// # LEXICAL SCOPE
function funcLuar() {
    const nilailuar = "Ini string nilai luar";
    function funcDalam() {
        let nilaiDalam = `di dalam mengambil ${nilailuar}`;
        console.log(nilaiDalam);
    }
    funcDalam();
}

// # FUNCTION EXPRESSIONS
const perpangkatan = function (nilai) {
    return nilai * nilai;
}
perpangkatan(9);

// 1 function sebagai argument function lain
function duaKali(func) {
    func(); func()
}
function dadu() {
    const value = Math.floor(Math.random() * 8) + 2;
    console.log(value);
}
duaKali(dadu)

// 2 function bernilai balik function
function hasilnyaFunction() {
    const rand = Math.random()
    if (rand > 1) {
        return function () {
            console.log('Selamat, Angka Lebih Besar')
        }
    } else {
        return function () {
            console.log('Coba Lagi')
        }
    }
}

// # METHOD: menambahkan function pd object property
const aritmatika = { //object
    perkalian: function (x, y) { //method
        return x * y
    },
    pembagi: function (x, y) {
        return x / y
    },
    pangkat: function (x) {
        return x * x
    }
}

// # This: keyword utk call property pd object yg sama utk mendptkan nilai
const saya = {
    nama: 'fitra',
    hobi: 'nothing',
    kenalan: function () {
        return `Saya ${this.nama}. Hobi saya ${this.hobi}`
    }
} // call -> saya.kenalan()

// # Try and Catch: rescuer(penyelamat): menghandle error
try {
    saya.kenalan()
} catch (error) {
    console.log('error!!')
}
// cth lain
function chat(msg) {
    try {
        console.log(msg.toUppercase())
    } catch (error) {
        console.log(error)
        console.log('Masukan string pada argument chat()')
    }
}

// # FOREACH METHOD: callback function a fungsi sebnyak jmlah element array
//callback function
const no = [1, 2, 3, 4, 5, 6, 7, 8, 9];
no.forEach(function (n) {
    console.log(n * n) // output: 1,4,9,16...
})
// cth lain
const noo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
noo.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})
// cth lain
const sports = [
    { title: 'football', rating: 95, },
    { title: 'badminton', rating: 92, },
    { title: 'baseball', rating: 91, },
]
sports.forEach(function (sport) {
    console.log(`${sport.title} - ${sport.rating}/100`)
})

// # MAP METHOD: value balik, array baru sdh dimodifikasi melalui callback function array
// fungsi map: memanipulasi array yg sdh ada
const expression = ['lol', 'omg', 'fyi']
const capsExpression = expression.map(function (exprs) {
    return exprs.toUpperCase();
})
expression; // output: ['lol','omg','fyi']
capsExpression; // ['LOL','OMG','FYI']
// cth lain
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const noDouble = number.map(function (num) { return num * 8; });
// cth lain
const sportslist = [
    { title: 'football', rating: 95, },
    { title: 'badminton', rating: 92, },
    { title: 'baseball', rating: 91, },
]
const job = sportslist.map(function (good) {
    return good.title.toUpperCase();
})

// # Return Secara Implisit Dari Arrow Function
// if have hanya 1 fungsi saja bisa gunakan () utk melakukan return
const random = () => ( // -> () = return
    Math.floor(Math.random() * 100)
)
// or bisa kek gini utk code yg lebih pendek
const add = (a, b) => a + b

// # Settimeout Dan Setinterval: callback function, fungsi: beri waktu jeda & perulangan setiap waktu yg ditentukan
// setTimeout: menunggu proses sesuai waktu yg ditentukan
console.log('Hay..')
setTimeout(() => {
    console.log('Sayang lagi dimana?')
}, 5000);
console.log('Kangen..')
// setInterval: melakukan proses secara berulang sesuai waktu yg ditentukan
const interval = setInterval(() => {
    console.log(Math.random())
}, 2000); // utk stop: clearInterval(interval)

// # Filter Method Array: mengembalikan value array lagi yg sdh dimanipulasi sesuai dgn kriteria yg ditetapkan
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const genap = number1.filter(n => {
    return n % 2 === 1; // if value n angka genap maka callback function akan buat array baru berisi angka2 genap
}) // output: [2,4,6,8]
// cth lain
const sportslist2 = [
    { title: 'football', rating: 95, },
    { title: 'badminton', rating: 92, },
    { title: 'baseball', rating: 91, },
]
const olahraga = sportslist2.filter((sprts) => sprts.rating > 91)

// # EVERY N SOME METHOD ARRAY
// EVERY: mengembalikan value boolean, if seluruh nilai memiliki kriteria sama maka nilainya true
const kataKita = ['kamu', 'kita', 'saya']
kata.every(kata => {
    return kata.length === 4
}) // true
// SOME: if kriteria salah satu sama maka true
// cth every n some
const examScore = [83, 82, 95, 87, 99];
const isGraduate = examScore.every((score) => score >= 80) //seluruh: true
const graduate = examScore.some((exam) => exam > 90) //sebagian: true

// # REDUCE: dptkan 1 value sesuai kondisi array
const subtotal = [223, 211, 111, 333];
const total1 = subtotal.reduce((currentTotal, singleSubtotal) => {
    return currentTotal + singleSubtotal
})
// cth lain
const list = [
    { title: 'badminton', rating: 92, },
    { title: 'baseball', rating: 91, },
    { title: 'football', rating: 95, },
]
const bestSport = list.reduce((bestSport, currSport) => {
    if (currSport.rating > bestSport.rating) {
        return currSport
    }
    return bestSport
})

// # Object This Di Dalam Arrow Function Mengarah Pada Object Global Window
const Person = {
    firstName: 'Syafiq',
    lastName: 'Saputra',
    fullName: () => { //arrow function
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    },
    callNanti: function () {
        setTimeout(function () {
            console.log(this)
        }, 4000)
    }
}

// FITUR TERBARU JS
// 1. Mengatur Default Value Pada Function: value yg dipake dicall tp tdk diberi value argument
function kali(a,b = 1){
    return a * b;
}
// cth lain  
function sapa(name, msg = 'Here we go'){
    console.log(`${name} ${msg}`);
}

// 2. Spread operator function:Ubah array/object jadi deret value argument function
const number2 = [6,5,8,4]
Math.max(number2)
Math.max(...number2) //spread operator

// 3. Menggabungkan Nilai Array Dengan Array Lagi
// merge array with spread operator
const angka1 = [1,2,3,2,4,5]
const nama = ['gisel','nur','manda']
const campuran = [...angka1, ...nama]

// 4. Merge object with spread operator
const user = {
    name: 'User',
    email: 'bla@aja.com'
};
const userNew = {...user, id: 22, pass:'qwerty'}

// 5. Malas Bikin Parameter Banyak Bisa Pakai Rest Param
// Rest Param
function sumAll(...nums){
    let total = 0
    for(let n of nums) total += n 
    return total
}
// cth lain
const SumAll = (...nums) => {
    return nums.reduce((total, el) => total + el)
}
// cth lain
const namaLomba = ['gisel','nur','manda','halimah','hana']
const pemenang = (gold,silver,bronze, ...sisa) => {
    console.log(`Medali emas diraih: ${gold}`)
    console.log(`Medali perak diraih: ${silver}`)
    console.log(`Medali perunggu diraih: ${bronze}`)
    console.log(`Peserta lainnya: ${sisa}`)
}

// 6. Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah-
// Destructing: unboxing array n object
const Nma = ['Gino','Fitra','Fira','Kelvin','Salma']
const [gold,silver,bronze] = Nma
const [Juara, ...Peserta] = Nma

// 7. Bongkar Juga Properti Object Ke Masing-Masing Variabel > Destructing
const user1 = {
    name: 'User',
    email: 'bla@aja.com'
};
const {name,email} = user1

// 8. Bongkar Properti Object Bisa Dilakukan Di Dalam Function > Destructing
const user2 = {
    name: 'User',
    email: 'bla@aja.com',
    role: 'Admin'
};
const userAndRole = ({name,role}) => {
    return `${name} ${role}`
}
userAndRole(user2)
// cth lain
const list1 = [
    { title: 'badminton', rating: 92, year: 2024},
    { title: 'baseball', rating: 91, year: 2009},
    { title: 'football', rating: 95, year: 2020},
]
const sprts = list1.map(({title,year,rating}) => {
    return `${title} (${year}) rating ${rating}`
})

























































