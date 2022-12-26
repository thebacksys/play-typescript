// Union

function responseJson(responseCode: string | number, message: string) {
  return JSON.stringify({
    code: +responseCode,
    message: message,
  });
}

const res1 = responseJson(200, "OK");
console.log(`temp type : ${typeof res1} value: ${res1}`);

const res2 = responseJson("200", "OK");
console.log(`temp type : ${typeof res2} value: ${res2}`);
