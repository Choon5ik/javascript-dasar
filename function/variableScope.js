// global scope / window scope
// var a = 1;

// function tes(){

    // var b = 1;
    // jika console.log di taruh di dalam function baru bisa keluar (function memiliki local scope)
    // console.log(b);
// }

// tes();
// b tidak akan muncul karena dari luar tidak bisa ngakses scope function
// console.log(b);

// function tes(){

    // name conflict
    // var a = 2;
    // jika console.log(a) ditaruh di dalam maka akan muncul var a = 2
    // console.log(a);
    // kecuali menambahkan console.log(window.a) <-- ini akan memunculkan var a = 1
// }

// tes();
// jika console.log ditaruh diluar maka yg akan muncul tetap var a = 1
