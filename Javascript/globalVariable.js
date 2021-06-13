//what evaluates typeof a and typeof b and typeof c
function foo() {
  let a = b = c = 0;
  console.log({a})
  console.log({b})
  console.log({c})
  a++;
  console.log({a})
  b = a
  console.log({b})
  return c;
}
console.log({"foo() " : foo()});
console.log({"typeof a" : typeof a}) // => ???
console.log({"typeof b" : typeof b})
console.log({"typeof c" : typeof c})
/* let a = b = 0. This statement declares a local variable a.
However, it does declare a global variable for b and c*/
