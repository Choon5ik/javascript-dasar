function tambah () {
    var hasil = 0;
    
    // arguments.length untuk mengetahui berapa nilai yg diinput user
    for ( var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

// arguments diatas mengatasi kasus berapapun jumlah nilai yang dikasih user tanpa harus mengubah parameter terus menerus
var coba = tambah (1,2,3);
console.log(coba);