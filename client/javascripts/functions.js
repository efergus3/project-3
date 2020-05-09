// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

const bitBatBotOrNot = (n) => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if ((n % 3 != 0) && (n % 5 != 0) && (n % 7 != 0)){
    result = `Not`;
  }
  return result;
};

let findAllbitBatBotOrNots1 = (arr) =>{
  //use array.map and no loop
  let resultArr = arr.map((elem) => {
    return elem + ':' + bitBatBotOrNot(elem);
  });
  return resultArr;
};

let findAllbitBatBotOrNots2 = (arr) => {
  //use for loop and array.push
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let elem = bitBatBotOrNot(currentNum);
    let combinePhrase = currentNum + ':' + elem;
    result.push(combinePhrase);
  }
  return result;
};

let findAllbitBatBotOrNots3 = (arr) => {
   //use for..of statement and array.push method
   let arrtoString = arr.toString();
   let currentNum = arrtoString.split(' ');
   let result = [];
   for (char of arr){
     let elem = bitBatBotOrNot(char);
     let combinePhrase = char + ':' + elem;
     result.push(combinePhrase);
   }
   return result;
};

let findAllbitBatBotOrNots4 = (arr) => {
   //use forEach method and array.push
   let result = [];
   arr.forEach((char) => {
     let elem = bitBatBotOrNot(char);
     let combinePhrase = char + ':' + elem;
     result.push(combinePhrase);
   });
   return result;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
