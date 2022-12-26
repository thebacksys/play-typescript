// Casting

let somePrice: unknown = "100";

var discount: number = (20 / 100) * (somePrice as number);
// var discount: number = (20 / 100) * somePrice;

console.log("somePrice = ", somePrice);

console.log("discount = ", discount);
