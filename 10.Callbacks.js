//Higher Order Functions and callbacks


//1. Takes a function as an input (argument)

element.addEventListener("change",() => {

    console.log("Our evidence is updated");
  
  });

//2. Returns a function as the output
const newClue = (name) => {
    const length = name.length;
  
    return (weapon) => {
      let clue = length + weapon.length;
      return !!(clue % 1);
    };
  
  };

// CALLBACKS
//Functions that we pass a function

const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
  };
  
ifElse(true,
   () => { console.log(true);},
   () => { console.log(false);}
  );

// if condition is true return isTrue() else if is False return isFalse()
// will return the second argument in the ifElse function --> true

const ifElse2 = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
  };
  
  
  const logTrue = () => {console.log(true);};
  const logFalse = () => {console.log(false);};
  
  ifElse2(true, logTrue, logFalse);

//  PASSING ARGUMENTS

var increment = function(n){ return n + 1 };

var square = function(n){ return n * n };

var doMathSoIDontHaveTo = function(n, func){ return func(n) };

doMathSoIDontHaveTo(5, square); //25

doMathSoIDontHaveTo(4, increment); // 5 

//Translate into ES6
var increment = n =>  n + 1
var square = (n) => {n * n}

var doMathSoIDontHaveTo = (n, func) => { return func(n) };

doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

//How do we pass arguments?
const ifElse3 = (condition, isTrue, isFalse, param) => {
    return condition ? isTrue(param) : isFalse(param);
  };

  ifElse(true, fn1, fn2, 'HI'); // --> 'HI' is param

// Second Example

const ifElse4 = (condition, isTrue, isFalse, ...args) => {
    console.log(args) //['HI', 'BYE', 'HOLA']
    return condition ? isTrue(...args) : isFalse(...args);
    isTrue('HI', 'BYE', 'HOLA')
  };
  ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');



// REDUCE:

let _ = {};

    _.reduce = function (collection, callback, initialValue = collection[0])  {
        let preValue = initialValue;

        for (let i = 0; i < collection.length; i++) {
            preValue = callback(collection[i], preValue)
        }
        return preValue;
    }
    

//_.reduce -> Always retrun 1 value
//_.reduce(collection, [iteratee=_.identity], [accumulator])
//Loops the collection and the function will be pass with the value that is looping (current) and the next.
// _.reduce (collection, callback)

_.reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0); // 0 -> is the initial value
  // => 3

  _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    
    (result[value] || (result[value] = [])).push(key); // collectiong all of the keys that have the same value
    
    return result;
  }, {}); // {} -> object is the initial value, so result is the initial value

  // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)