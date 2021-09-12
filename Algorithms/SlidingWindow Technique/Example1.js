//Given an array of integers,find maximum sum subarray of the required size.
//Statically sized means only two items sum 
//Example 1:
let inputArray  = [-1,2,3,1,-3,24,2,9];
let subArraySize  = 2;
let maxValue = 0;
let index = 0;

maximumSum =(array) =>{
  for(let i = 0;i<=array.length; i++){
    let value = array[i] + array[i+1];
    if(maxValue < value){
      maxValue = value;
      index = i
    }
  }
 return [array[index],array[index+1]]
}

console.log(maximumSum(inputArray))