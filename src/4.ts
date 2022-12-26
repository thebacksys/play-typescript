// Tuples

// เป็น array ที่มีการระบุจำนวนและชนิด ของแต่ละ index ไว้ก่อน
let someTuple: [number, boolean, string];
someTuple = [5, false, "abc"];
console.log(`someTuple type : ${typeof someTuple} value: ${someTuple}`);

someTuple[0] = 100;
someTuple.push("xyz");
someTuple.push(500);
console.log(`someTuple type : ${typeof someTuple} value: ${someTuple}`);
// someTuple[3] = "ccc"; // error undifined

let aTuple: readonly [number, boolean, string] = [5, false, "abc"];
// aTuple.push("xyz"); // error
