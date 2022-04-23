
let clue = {};

clue.murderer = "??";

clue['armas'] = ["Cuerda", "Puñal", "Herramienta", "Pistola", "Candelabro", "Tuberia de Plomo"];

clue['personajes'] = ["Miss Scarlett", "Colonel Mustard", "Mrs White", "Reverend Gree ", "Mrs. Peacock", "Professor Plum", "Captain Brown", "Miss Peach", "Mr Slate-Grey",]

clue.habitaciones = [];
clue.habitaciones[0] = "Patio"
clue.habitaciones.push("Sala de Juegos", "Estudio", "Comedor", "Garaje", "Salon", "Cocina", "Dormitorio", "Baño")

clue.nested = {}
let prueba = 'Hola'
clue.nested[prueba] = 'Mundo'

console.log(clue);

/*
- What is an object?
    In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

    The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.

    JavaScript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.
    let empty = {}

- What is the difference between dot and bracket notation?
    The dot notation and bracket notation both are used to access the object properties in JavaScript. The dot notation is used mostly as it is easier to read and comprehend and also less verbose. The main difference between dot notation and bracket notation is that the bracket notation allows us to access object properties using variable.
    * Dot notation:
        Property identifies can only be alphanumeric (and _ and $)
        Property identifiers cannot start with a number.
        Property identifiers cannot contain variables.
        OK — obj.prop_1, obj.prop$
        Not OK — obj.1prop, obj.prop name
    * Bracket notation:
        Property identifiers have to be a String or a variable that references a String.
        It is okay to use variables, spaces, and Strings that start with numbers
        OK — obj["1prop"], obj["prop name"]

- How do you add a property with a key that contains special characters?
    With Bracket notation
    clue.names["algo..dos"] - OK

- How do you add a property whose key and value are stored in different variables?
    const obj = {a: 'foo'}
    const prop = 'bar'
    obj[prop] = 'baz'
    {
        a: 'foo',
        bar: 'baz' // * Or [prop]: 'baz'
    }

How do we loop through objects to access the values?
    const courses = {
        java: 10,
        javascript: 55,
        nodejs: 5,
        php: 15
    };

    * convert object to key's array
    const keys = Object.keys(courses);
    
    * print all keys
    console.log(keys);  --> [ 'java', 'javascript', 'nodejs', 'php' ]
    
    * iterate over object
    keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
    }); ---> java: 10 - javascript: 55 - nodejs: 5 - php: 15
*/