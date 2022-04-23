const _ = require('lodash')

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
let suspectsList = [];

// let missScarlett = CreateSuspectObjects(suspects[0])
// console.log(missScarlett)

for (let i = 0; i < suspects.length; i++) {
    // let suspect = CreateSuspectObjects(suspects[i]);
    // suspectsList.push(suspect);   
    suspectsList.push(CreateSuspectObjects(suspects[i]));
};
// console.log(suspectsList[2])

//.each toma dos argumentos, el primero es una lista de la lista, el segundo es una callback function
// Callback - se le conoce como iteration function, el cual provoca loops. El que itera
//Suspects - se le conoce como aquel que se va a iterar
//La funcion se llama en cada elemento de la lista de suspects
_.each(suspects, function (name){
    // let suspectObj = CreateSuspectObjects(name);
    // suspectsList.push(suspectObj);
    suspectsList.push(CreateSuspectObjects(name));
});
console.log(suspectsList[0])

// _.each - underscore library - lodash - is an object because it has a dot. (_) es una funcion de each let _ = {each: function(){}}
//_.each(list, function)
//function: It is the function which is executed by taking each element of the list.
let rooms = ['observatory', 'ballroom', 'library'];
let logger = function (room){
    console.log(room)
}
_.each(rooms, logger)