// Functions

type CarType = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

function getTheCar(): CarType {
  return {
    make: "Volvo",
    model: "Prius",
    year: 2018,
    color: "blue",
    price: 100000,
  };
}

function showTheCar(): void {
  console.log(getTheCar());
}

let listCarTypes: CarType[] = [
  { make: "Toyota", model: "Prius", year: 1972, color: "green", price: 549000 },
  { make: "Ford", model: "Mustang", year: 1973, color: "red", price: 750000 },
  { make: "Toyota", model: "Vios", year: 1974, color: "green", price: 89500 },
];

function getPrice(): number {
  return 100;
}

function getCarType(indexCarType: number): CarType {
  return listCarTypes[indexCarType];
}

let myCarType: CarType = getCarType(2);
console.log(myCarType);

function getCarTypePrice(price: number, model?: string): CarType | undefined {
  return listCarTypes.find((carType) => {
    return carType.price === price;
  });
}
