let x: number = 10;
if (true) {
  let x = 20;
  console.info("let x (in block): ", x);
}

console.info("let x (out block): ", x);
