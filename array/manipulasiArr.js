// Manipulasi Array

// 1. menambah isi array
// var arr = ['a', 1, true];
// console.log(arr);

// var arr = [];
// arr[0] = "Ucup";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[6] = "Doddy";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Sandhika", "Galih", "Nofa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Sandhika", "Galih", "Nofa"];

//     for ( var i = 0; i < array.length; i++) {
//         console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
//     }

// Method pada array
var arr = ["Sandhika", "Galih", "Doddy"];
// 1. Join
// console.log(arr.join(' - '));

// 2. push (menambah elemen terakhir ke array) & pop (menghapus elemen terakhir array)
// arr.push ('Nofa'); (bisa menambahkan langsung banyak elemen)

// arr.pop (); (pop harus menhapus satu persatu elemen tidak bisa sekaligus)
// arr.pop ();

// 3. unshift (menambahkan elemen baru di awal) & shift (menghilangkan elemen awal)
// arr.unshift('Doddy');
// arr.shift();

// 4. splice (menyisipkan elemen baru di tengah)
// splice (indexAwal , mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Doddy', 'Fitri');

// 5. slice (mengiris sebuah array menjadi array yang baru)
// slice(awal,akhir+1) + slice harus siapkan array baru
// var arr = ['Sandhika', 'Galih', 'Doddy', 'Fitri', 'Nofa'];
// var arr2 = arr.slice (1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. forEach
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["Sandhika", "Galih", "Nofa"];
// for( var i = 0; 1 < angka.length; i++) {
//     console.log(angka[i]);
// }

// ****function expression biasa****
// var cetak = function(e){
//     console.log(e);
// }

// ****forEach****
// angka.forEach(function(e){
//     console.log(e);
// });

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke- ' + (i+1) + 'adalah : ' + e);
// })

// 7. Map (mengembalikan nilai array, forEach tidak mengembalikan nilai)
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.forEach(function(e){
//     return e*2;
// });
// console.log(angka2.join(' - '));

// 8. Sort (mengurutkan isi array)
// var angka = [1,2,5,3,6,8,4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka);

// var angka = [1,10,20,2,5,3,6,8,4]; untuk case seperti ini maka harus tambahkan function jika tidak dia akan 1-10-2-20-3-4-.....
// angka.sort(function(a, b){
//     return a-b;
// });

// 9. filter (mencari nilai pada array dan mengembalikannya dalam bentuk array) & find (tidak menghasilkan array tapi 1 nilai)
// var angka = [1,10,20,2,5,3,6,8,4];
// var angka2 = angka.filter(function(e){
// bisa mencari 1
// return e == 5;
// bisa mencari banyak
//     return e > 5;
// });

// var angka2 = angka.find(function(e){
// bisa mencari 1
// return e == 5;
// bisa mencari banyak
//     return e > 5;
// });
// console.log(angka2);

console.log(arr.join(" - "));
