// Membuat object
// Object Literal
var mhs1 = {
    nama : 'nathan',
    nomor : '04431341384',
    email : 'nathan@gmail.com',
    jurusan : 'teknik informasi'
}

var mhs2 = {
    nama : 'sandhika',
    nomor : '0343541456',
    email : 'sandhika@gmail.com',
    jurusan : 'teknik industri'
}

// cara lain object literal

// var.obj = {};
// object.halo = function() {
//     console.log('halo');
// }
// obj.halo();

// Function Declaration
function membuatObject (nama, nomor, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nomor = nomor;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = ('doddy', '03334615419', 'doddy@gmail.com', 'teknik hukum');

// Constructor (biasakan nama function huruf besar)
function Mahasiswa (nama, nomor, email, jurusan) {
    // var this = {}; sudah disediakan beda dengan declaration
    this.nama = nama;
    this.nomor = nomor;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

// constructor cara memanggil menggunakan new
var mhs4 = new Mahasiswa ('bobby', '0452618237', 'bobby@gmail.com', 'teknik kimia');