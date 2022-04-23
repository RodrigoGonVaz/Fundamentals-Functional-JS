let _ = {}

_.curry =  (fn) => { //abc
    return (arg) => { //1
        return (arg2) => { // 2
            return fn(arg, arg2) // [1,2]
        }
    }
}

let abc = function (a,b) {
    return [a,b]
};

let curried = _.curry(abc);

curried(1)(2)
// [1,2]


///COMPOSE
_.compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result)
    }
}

const consider = (name) =>{
    return `I think it could be... ${name}`;
};

const exclaim  = (statement) => { 
    return `${statement.toUpperCase()}!`; 
  };
  
  const blame = _.compose(consider, exclaim);
  
  blame('you');