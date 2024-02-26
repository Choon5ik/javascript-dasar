// this

// jika membuat his di scope global maka this === window
// console.log(this === window);


// cara 1 - function declaration
// function halo () {
//     console.log(this);
//     console.log('halo');
// }
// this.halo (); 
// atau window.halo();

// this mengembalikan obejct global

// cara 2 - object literal
// var obj = {a : 10, nama : 'anto'};
// obj.halo = function () {
//     // this akan mengembalikan object yang bersangkutan
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();

// cara 3 - constructor
// function Halo () {
//     console.log(this);
//     console.log('halo');
// }
// // jika tidak memakai new maka this akan berisi window
// // jika pakai new maka akan mengembalikan objectnya, object yg dikembalikan adalah object yang baru dibuat bukan yang diatas
// new Halo();