//1. Create an object that looks like this:
// { name: 'Rusty', room: 'kitchen', weapon: 'candlestick'}
//2. Extract out the weapon and location using destructuring:
let  {name, room, weapon} = {
    'name': 'Rusty', 
    'room': 'kitchen', 
    'weapon': 'candlestick'
};


console.log(weapon, room)

//Destructuring Examples:
let [a,b] = [1,2]
console.log(a,b) // 1 2

//Omit certain values
let [a, , b] = [1,2,3]
console.log(a,b) // 1 3

//Combine witrh spread/rest operator (accumulates the rest of the values)
let [a, ...b] = [1,2,3]
console.log(a,b) // 1 [2, 3]

//Swap variables easily without temp
let a = 1, b = 2
[b, a] = [a, b]
console.log(a,b) // 2 1
/*before
let a = 1, b = 2
let temp = a
a = b
b = temp
*/ 

//Advance deep arrays
let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log('a:', a, 'b:', b, 'c:', c, 'd:', d)
// -> a: 1  b: 2  c: [[3, 4], 5]  d: 6

// === Objects
let { user: x } = { user: 5 };
console.log(x);
// => 5

// Fail-safe
let {user: x} = { user2: 5 };
console.log(x); 
// => undefined

//More Values
let {prop: x, prop2: y} = {prop: 5, prop2: 10};
console.log(x, y);
// => 5 10

//Short-hand Syntax
let {prop, prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2)
// => 5 10

//Equal to:
let {prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10


