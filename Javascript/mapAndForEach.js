/*  The choice between map() and forEach() will depend on your use case. 
If you plan to change, alternate, or use the data, you should pick map(), 
because it returns a new array with the transformed data.
But, if you won't need the returned array, don't use map() - 
instead use forEach() or even a for loop. 

The map() method returns an entirely new array with transformed elements and 
the same amount of data. In the case of forEach(), even if it returns undefined, 
it will mutate the original array with the callback.
Therefore, we see clearly that map() relies on immutability and forEach() is a mutator method.*/

/* Map  * /
/* returns entirly new Array - leaving orginal array unchanged */
//Example1
let arr = [2,3,4];
let arr1 = arr.map(val => {
  return val*2
})
console.log({arr});
console.log({arr1});
/* It can chain with other methods like reduce(),sort(),filter() */
//Example2
const someArray = [1, 2, 3, 4, 5]
const result = someArray.map(val =>val*2).reduce((total,value) => total+value);
console.log({result})

/* For Each */
/* return undefined and do the changes in existing array by passing through each elemnt */
//Example1
let array = [1, 2, 3, 4, 5];
array.forEach((num, index) => {
  return array[index] = num * 2;
})
console.log({array})
//Example2
let arr2 = [5,6,7]
let arr3 = []
arr2.forEach(val => {
  arr3.push(val*2)
})
console.log({arr2})
console.log({arr3})
/* It cannot chain with other methods as it returns undefined */
const chainArray = [1, 2, 3, 4, 5]
chainArray.forEach(x => x * x).reduce((total, value) => total + value)
console.log({chainArray});
//TypeError: Cannot read property 'reduce' of undefined