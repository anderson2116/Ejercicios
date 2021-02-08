const array1 = [1, 2, 3, 4];

const r =array1.reduce((acc, val, i)=> {
let res =  acc+val;
  if(i===(array1.length-1)){
    res = res/array1.length;
  }
  return res;
},0);
console.log({"ma": r, "promedio": r});

