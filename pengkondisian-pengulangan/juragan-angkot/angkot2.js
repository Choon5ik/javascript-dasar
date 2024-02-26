var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

while (angkot <= angkotBeroperasi) {
    console.log("Angkot No. " + angkot + " beroperasi dengan baik.");
    angkot++;
}

for (angkotBeroperasi + 1; angkot <= jumlahAngkot; angkot++) {
    console.log("Angkot No. " + angkot + " sedang tidak beroperasi.");
}