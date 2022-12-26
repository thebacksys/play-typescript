// Aliases and Interfaces

// Aliases
// used for primitives / objects / arrays
// defining types with a custom name
type CarBrand = string;
type CarModel = string;
type CarYear = number;

type Car = {
  brand: CarBrand;
  model: CarModel;
  year: CarYear;
};

const carBrand: CarBrand = "Toyota";
const carModel: CarModel = "Altis";
const carYear: CarYear = 1992;

const myCar: Car = {
  brand: "Toyota",
  model: "Altis",
  year: 1992,
};

type MyCarModels = string[];

var myCarModels: MyCarModels = [];
myCarModels.push("ModelX");
console.log(myCarModels);

// Interfaces
// used only objects
interface ICar {
  brand: string;
  model: string;
  year: number;
}

const newCar: ICar = {
  brand: "Tesla",
  model: "ModelX",
  year: 1992,
};
// interface IMyBrand = string; // error

interface ICustomColorCar extends ICar {
  color: string;
}

const carCustomColor: ICustomColorCar = {
  brand: "Tesla",
  model: "ModelX",
  year: 1992,
  color: "green",
};
