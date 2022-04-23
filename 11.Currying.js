//Currying is a process of using a function to gather arguments before passing them to another function.

//_.curry(func, [arity=func.length])

const _ = require('lodash') 

 

var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3);
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]

const consider = (name) => { 
    return `I think it could be... ${name}`; 
  };
  
  const exclaim  = (statement) => { 
    return `${statement.toUpperCase()}!`; 
  };
  
  const blame = _.compose(consider, exclaim);
  
  blame('you');
  
  //=> 'I think it could be... YOU!'
  