function jumlahVolumeKubus (a,b) {
    var volumeA;
    var volumeB;
    var total

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

// cara memanggil function
// 8 akan masuk sebagai a dan 3 akan masuk sebagai b
// jumlahVolumeKubus(8, 3); ini sudah jalan tapi masih di memory

// cara tampilkan bisa pakai console.log atau alert
// console.log (jumlahVolumeKubus(8, 3));

alert(jumlahVolumeKubus(8, 3));

// sudah ada function bisa buat kasus berulang-ulang

alert(jumlahVolumeKubus(10, 15));
alert(jumlahVolumeKubus(13, 90));