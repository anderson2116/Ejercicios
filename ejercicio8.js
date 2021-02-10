let array = [];
let arrayPares = [];

function array1() {
  const temparr = [];
  for (let i = 1; i <= 100; i++) {
    array.push(i);
  }
  for (let j = 1; j <= array.length; j++) {
    if (array[j] % 2 === 0) {
      temparr.push(array[j]);
    }
  }
  return temparr;
}
const a = array1();
console.log(a);

let total = a.reduce((a, b) => a + b);
console.log(total);
