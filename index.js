// function singHappyBirthday() {
//   console.log('happy birthday')
// }
// const myFunc = function () {
//   console.log('Happy birthday')
// }
const myFunc = () => {
  console.log('happy Bithday')
}

myFunc()
// singHappyBirthday(); // call the funtion
// singHappyBirthday(); // call the funtion
// singHappyBirthday(); // call the funtion
// // singHappyBirthday(); // call the funtion
// // singHappyBirthday(); // call the funtion
// // singHappyBirthday(); // call the funtion
// // singHappyBirthday(); // call the funtion

// // make more than one function 
// function twoPlusFour() {
//   console.log(2 + 4);
// }

// const twoPlusFour = function(){
//   console.log(2+4)
// }
const twoPlusFour = () => {
  console.log(2 + 44)
}
twoPlusFour()
// twoPlusFour()
// twoPlusFour()
// function sumTwoNumber(num1, num2) {
//   return num1 + num2;
// }
// const sumTwoNumber = function(num1, num2){
//   return num1 + num2;
// }

const sumTwoNumber = (num1, num2) => {
  return num1 + num2;
}
console.log(sumTwoNumber(8, 88))

// console.log(sumTwoNumber(1, 2))

// function oddEven(number) {
//   // return number % 2 === 0;
//   if (number % 2 === 0) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// }
// // oddEven(4);
// const oddEven = function (number){
//   if(number%2===0){
//   console.log(true)
//   }else{
//     console.log(false)
//   }
// }
const evenOdd = number => {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(evenOdd(5))
// const oddEven = function (number){
//   return number %2===0;
// }
const oddEven = (number) => number % 2 === 0;

console.log(oddEven(23));

// function newString(str) {
//   return str[0]
// }
// const newString = function (str){
//   return str[0]
// }

const newString = str => str[0]

console.log(newString('Nir'))

// console.log(newString('Manoj'));
// 

// function findTarget(array, target) {
//   for(let i = 0; i < array.length; i++) {
//     if ( array[i]=== target) {
//       return (i)
//     } 
//   }
//   return -1
// }

const findTarget = function(array, target) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3]
console.log(findTarget(arr, 3))