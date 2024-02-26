var tanya = true;
while ( tanya ) {
    // menangkap pilihan player
    var p = prompt ('pilih: gajah, orang, semut');

    // menangkap pilihan computer
    // membangkitkan / generate bilangan random
    var comp = Math.random();


    if(comp < 0.34) {
        comp = 'gajah';
    }else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    }else {
        comp = 'semut';
    }
    console.log(comp);

    var hasil = '';
    // menentukan rules
    if( p == comp ) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        //     if (comp == 'orang') {
        //         hasil = 'MENANG';
        //     }else {
        //         hasil = 'KALAH';
        // }
        // operator ternary hasil = (kondisinya apa) maka jika true (?) 'MENANG' jika false (:) 'KALAH';
        hasil = ( comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'orang') {
        hasil = ( comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Anda memasukkan pilihan yang salah';
    }

    // menentukan hasilnya
    alert( 'Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('coba lagi ?');
}

alert('terimakasih sudah bermain.');