// Object

// explicit
const car: { brand: string; model: string; year: number } = {
  brand: "Toyota",
  model: "Prius",
  year: 1994,
};
console.log(car);

// infer
const inferCar = {
  brand: "Toyota",
  model: "Prius",
  year: 1994,
};
inferCar.brand = "Honda";
inferCar.model = "Civic";
inferCar.year = 1998;
console.log(inferCar);

// optional property
const optionalCar: { brand: string; model: string; year?: number } = {
  brand: "Toyota",
  model: "Prius",
};
console.log(optionalCar);

// Index Signatures
const customCar: { [index: string]: string | number | boolean } = {};
customCar.brand = "Honda";
customCar.color = "green";
customCar.budget = 5000000;
customCar.isImport = true;
console.log(customCar);
