function cetakAngka (n) {
    // base case untuk memberhentikan si rekursif
    if ( n === 0) return;
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);

function faktorial (n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

faktorial(5);