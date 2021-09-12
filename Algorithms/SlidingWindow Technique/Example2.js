//Given an array of positive integers,find the subarrays that add upto a given number
//Example 1:
let inputArray = [1,7,4,3,1,2,1,5,1]
let desiredSum =  7;

allPossibleArrays = (sumArray,sum) =>{
  let leftIndex = 0,rightIndex=0,partialArray = [];
  while (leftIndex < sumArray.length && rightIndex < sumArray.length) {
    let arr = [...sumArray].slice(leftIndex,rightIndex+1)
    let reducedArr = arr.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue
    },0)
    if(sum === reducedArr){
      partialArray.push(arr);
      leftIndex++;
      rightIndex = leftIndex;
    }
    else if(sum > reducedArr){
      rightIndex++;
    }
    else{
      leftIndex++;
    }
  }
  return partialArray;
}


console.log(allPossibleArrays(inputArray,desiredSum));