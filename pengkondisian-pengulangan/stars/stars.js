// stars 1 (segitiga kanan)
var s = "";

for (var i = 0; i < 7; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  // s = s + '*';
  s += "\n";
}
console.log(s);

// stars 1 (segitiga kiri)
var s = 7;
var space = "";

for (var i = 0; i <= s; i++) {
  for (var j = 0; j < s - i; j++) {
    space += " ";
  }
  for ( var k = 0; k < i; k++) {   
    space += "*";
  }
  // s = s + '*';
  space += "\n";
}
console.log(space);

// stars 2 (segitiga kanan arah bawah)
var s = "";

for (var i = 7; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  // s = s + '*';
  s += "\n";
}
console.log(s);

// // stars 2 (segitiga kanan arah bawah)
// var s = 7;
// var space = "";

// for (var i = 0; i < s; i++) {
//   for (var j = 0; j < s - i; j++) {
//     space += " ";
//   }
//   for ( var k = 0; k < i; k++) {
//     space += "*";
//   }
//   // s = s + '*';
//   space += "\n";
// }
// console.log(space);

// stars 3 (segitiga sama kaki)
var s = 5;
var space = "";

for ( var i = 1; i <= s; i++) {
  for ( var j = 1; j <= s - i; j++) {
    space += " ";
  }
  for ( var k = 0; k < 2 * i - 1; k++) {
    space += "*";
  }
  space += "\n";
}
console.log(space);

// stars 4 (segitiga sama kaki arah bawah)
var s = 5;
var space = "";

for (var i = 0; i < s; i++) {
  for ( var j = 0; j < i; j++) {
    space += " ";
  }
  for ( var k = 0; k < 2 * (s-i) - 1; k++) {
    space += "*";
  }
  space += "\n";
}
console.log(space);

// stars 5 (diamond)
var s = 5;
var space = "";

for ( var i = 1; i <= s; i++) {
  for ( var j = 1; j <= s - i; j++) {
    space += " ";
  }
  for ( var k = 0; k < 2 * i - 1; k++) {
    space += "*";
  }
  space += "\n";
}
for (var i = 0; i < s; i++) {
  for ( var j = 0; j < i; j++) {
    space += " ";
  }
  for ( var k = 0; k < 2 * (s-i) - 1; k++) {
    space += "*";
  }
  space += "\n";
}
console.log(space);