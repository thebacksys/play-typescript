// Casting

let somePrice: unknown = "100";

let discount: number = (20 / 100) * (somePrice as number);

console.log("somePrice = ", somePrice);

console.log("discount = ", discount);
