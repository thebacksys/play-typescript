// Arrays

const temp: string[] = [];
temp.push("x");
// temp.push(1); // error
console.log(`temp type : ${typeof temp} value: ${temp}`);

// number
const number: number[] = [];
number.push(1);
// number.push("x"); // error
console.log(`number type : ${typeof number} value: ${number}`);

// readonly number
const readOnlyNumber: readonly number[] = [1];
// readOnlyNumber.push(1); // error

// infer => number | string | boolean
const some = [1, "x", true];
some.push(2);
some.push("y");
some.push(false);
console.log(`some(3) type : ${typeof some} value: ${some}`);

// infer =>  number
const someNumber = [1, 2, 3];
someNumber.push(4);
// someNumber.push("x"); // error
