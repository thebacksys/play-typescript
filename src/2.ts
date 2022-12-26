// Any ชนิดข้อมูลสามารถเป็นอะไรก็ได้ assign ค่าให้กับ type อะไรก็ได้

let temp1: any;
console.log(`temp1(1) type : ${typeof temp1} value: ${temp1}`);

temp1 = 1234;
console.log(`temp1(2) type : ${typeof temp1} value: ${temp1}`);

temp1 = "1234";
console.log(`temp1(3) type : ${typeof temp1} value: ${temp1}`);

let tempx: number = temp1;

// Unknown ชนิดข้อมูลสามารถเป็นอะไรก็ได้ แต่จะ ไม่สามารถ assign ค่าให้กับ type อื่นได้

let temp2: unknown;
console.log(`temp2(1) type : ${typeof temp2} value: ${temp2}`);

temp2 = 1234;
console.log(`temp1(2) type : ${typeof temp2} value: ${temp2}`);

// let tempy: string = temp2;  ===> error
let tempy: string = temp2 as string;
console.log(`tempy type : ${typeof tempy} value: ${tempy}`);

// Never
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
  throwError("Unsupported type");
}

function throwError(message: string): never {
  throw new Error(message);
}

// Undefined
let u1;
console.log(`u1 type : ${typeof u1} value: ${u1}`);

// Null
let u2 = null;
console.log(`u2 type : ${typeof u2} value: ${u2}`);
