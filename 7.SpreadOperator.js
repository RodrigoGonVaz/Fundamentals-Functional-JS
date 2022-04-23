
const createTuple = (a, b, c, d) => {
    return [[a, c], [b, d]]
}

createTuple('It', 'be', 'could', 'anyone', 'no one');
//[[It could], [be anyone]]

//Spread Operator (...)

const createTuple2 = (a, b, c, ...d) => {
    console.log(arguments)
    //['It', 'be', 'could', 'anyone', 'no one']
    return [[a, c], [b, d]]
}

createTuple2('It', 'be', 'could', 'anyone', 'no one');
//[['It', 'could'], ['be', ['anyone', 'no one']]]
//Takes all the last arguments and returns them in one array


//---------------- Default Parameters ----------------
const add = function(a, b = 2){
    console.log(arguments) // [3] -> it shows only the arguments
    return a + b;
}

add(3) // 5

//---------------- Array Like Object ----------------
const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments); // ['was', 'it', 'in']
    // Converts an Array Like Object into an array
    console.log(arr)
    arr.push('the billiards room?');
    return arr.join(' ');
  };

  constructArr('was', 'it', 'in');
//was it in the billiards room?