// const array1 = [1, 2, 3, 4];

// const r =array1.reduce((acc, val, i)=> {
// let res =  acc+val;
//   if(i===(array1.length-1)){
//     res = res/array1.length;
//   }
//   return res;
// },0);
// console.log({"ma": r, "promedio": r});
var array = [4,1,2,1,1,3,45,13,42,52,45,25,13,40,13,2];

var repetidos = {};

array.forEach(function(numero){
  repetidos[numero] = (repetidos[numero] || 0) + 1;
});

console.log(repetidos);