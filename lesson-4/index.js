let testFunc = x => x * 2;
console.log(testFunc(2));

  
let myMapByReduce = function (in_array){
  return in_array.reduce((total, element) => {
    total.push(testFunc(element));
    return total;
    }, []);
}

  
const testData = [15.3, 26.5, 39.7];

console.log('start array -> ', testData);
console.log('Map -> ', testData.map(testFunc));
console.log('myMapByReduce -> ', myMapByReduce(testData));

  
let myReduceByMap = function (in_array){
   let summa = 0;
 // in_array.map(testFunc).forEach(num => {
 //   summa +=num;
 // });
 // return summa;

 return in_array.map((num, i) => {
   i !== 0 ? summa +=num: summa = num; 
   console.log(summa);
   return summa;}
   )[in_array.length -1]

 
  }

  
console.log('Reduce -> ', testData.reduce((total, amount) => total + testFunc(amount), 0));
console.log('myReduceByMap -> ', myReduceByMap(testData));