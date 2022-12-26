var i: number = 10;
if (true) {
  var i = 20;
  console.log("var i (in block): ", i);
}

console.log("var i (out block): ", i);
