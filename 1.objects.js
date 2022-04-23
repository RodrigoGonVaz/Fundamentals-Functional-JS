/*
What is functional Programming?
    - Braking the code into verbs
    - ACTIONS to do a process
    - Returning functions
*/

/*
 - Assignments with Dots
 (https://slides.com/bgando/f2f-final-day-1)
 (https://slides.com/bgando/f2f-final-day-2)
*/

let person = {};
person.name =  "Mrs. Gonzalez";

let who = person.name;

who; // who = "Mrs. Gonzalez";

person.name = 'Mr. Gonzalez';

who; // who = "Mr. Gonzalez"

who.story; //undefined

//We call this storing a value by reference or by value.
//We store private values by value.
/*
When you store a non-primitive value somewhere or you pass it to a function, 
for example, It's passed by reference. Which means that you're passing like a pointer to it.
But if you're passing around primitive values, you don't have to worry about that. It makes a copy every time.
*/

let person1 = []; // typeof is object

person1.name =  "Mrs. Gonzalez";

let who2 = person.name;

who2; // "Mrs. Gonzalez";
//Arrays are objects. 

person1[0] = 'I was not in the Billiard Room'

/*
person = {
    name: 'Mrs Gonzalez',
    0: 'I was not in the Billiard Room'
}
*/

//let plea = 'wouldShe'
//person1[plea] = 'I would never';

/*
person = {
    name: 'Mrs Gonzalez',
    0: 'I was not in the Billiard Room',
    wouldShe: 'I would never'
}
*/
person1['plea'] = 'I would never';
person1.plea; // 'I would never'
/*
person = {
    name: 'Mrs Gonzalez',
    0: 'I was not in the Billiard Room',
    plea: 'I would never'
}
*/
//!Arrays are a type of Objects that has some methods attached to it.

//Destructuring
//const [TARGET] = [SOURCE];
const [first, second] = [true, false];
// first - true / second - false

//const [TARGET] = [SOURCE];
const {first2, second2} = {first: 0, second: 1};
// first - 0 / second - 1