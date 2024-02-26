var penumpang = [];

var tambahPenumpang = function (namaPenumpang, Penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan "nama penumpang ini sudah ada di kursi"
        console.log(namaPenumpang + "sudah ada di dalam angkot");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan kursi angkot masih kosong
    console.log("Kursi angkot masih kosong!");
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya menjadi undefined
        penumpang[i] = undefined;
        return penumpang;
      }
      // jika tidak ada nama penumpang yang sesuai
      else if (i == penumpang.legth - 1) {
        // tampilkan pesan "nama penumpang tidak sesuai"
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }

  return penumpang;
};
