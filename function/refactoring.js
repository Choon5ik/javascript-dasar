// sebelum refactoring
function jumlahVolumeKubus (a,b) {
    var volumeA;
    var volumeB;
    var total

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeKubus(8, 3));


// sesudah refactoring
function jumlahVolumeKubus (a,b) {
    return a * a * a + b * b * b;
}

alert(jumlahVolumeKubus(8, 3));

// refactoring menyederhanakan codingan agar lebih efisien dan tidak memakan banyak memory