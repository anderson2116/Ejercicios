let arrayNumbers = [10, 8, 9, 5, 3, 78, 23];
let arrayOrdenado = [];
 
 
arrayNumbers.sort(function (a, b){
   return a - b;
});
arrayOrdenado = arrayNumbers;
 
 
console.log(arrayOrdenado.sort((a, b) => a - b ));