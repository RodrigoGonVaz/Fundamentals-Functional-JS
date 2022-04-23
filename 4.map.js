let _ = require('lodash')

_.map([1, 2, 3], function(elem, i, list){
    console.log(elem)
});

//Produces a new array of values by mapping each value in list through a transformation function (iterators)
//Each invoacation of iterator is called with three arguments: element, index, list. If list is a JS object iterator arguments will be (value, key, list)
//.each --> no regresa nada 
//.map --> regresa un nuevo array

const weapons = ['candlesticks', 'lead pipe', 'revolver'];
const makeBroken = function(item){
    return `broken ${item}`
}

const brokenWeapons = _.map(weapons, makeBroken) // Array.isArray() -- > true

console.log(brokenWeapons) // [ 'broken candlesticks', 'broken lead pipe', 'broken revolver' ]


//.map y .each
function CreateSuspectObjects(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            console.log('my name is ', name);
        }
    };
};

let suspects = ["Miss Scarlett", "Colonel Mustard", "Mrs White"];
let suspectsList = _.map(suspects, function(name){
    return CreateSuspectObjects(name);
})

console.log(suspectsList[1])

//_.each(suspects, function(suspect){
//    suspect.speak()
//})