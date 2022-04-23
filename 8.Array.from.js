
const constructArr = function() {
    // El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable (arrayLike).
    const arr = Array.from(arguments); 
    console.log(Array)
    arr.push('the billiards room?');
    return arr.join(' ');
  };
  constructArr('was', 'it', 'in');


const from = arr => {
    return Array.prototype.slice.call(arr)
}