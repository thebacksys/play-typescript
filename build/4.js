"use strict";
// Tuples
// เป็น array ที่มีการระบุจำนวนและชนิด ของแต่ละ index ไว้ก่อน
let someTuple;
someTuple = [5, false, "abc"];
console.log(`someTuple type : ${typeof someTuple} value: ${someTuple}`);
someTuple[0] = 100;
someTuple.push("xyz");
someTuple.push(500);
console.log(`someTuple type : ${typeof someTuple} value: ${someTuple}`);
// someTuple[3] = "ccc"; // error undifined
let aTuple = [5, false, "abc"];
// aTuple.push("xyz"); // error
