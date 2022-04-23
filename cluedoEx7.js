// REDUCE:

const _ = require('lodash')

// let _ = {};

//     _.reduce = function (collection, callback, initialValue)  {
//         let preValue = initialValue; 

//         for (let i = 0; i < collection.length; i++) {
//             if (i === 0 && preValue === undefined) {
//                 preValue = collection[0]
//             } else { 
//                 preValue = callback(collection[i], preValue)
//             }
//         }
//         return preValue;
//     }
//     _.map = function (list, callback){
//         let storage = [];
    
//         this.each(list, function(elem, i, list){
//             storage.push(callback(elem, i, list));
//         })
        
//         return storage;
//     }

let algo = _.reduce([2, 3, 5], (elem, sum) =>  elem + sum)
//1. collection[i] = 1, preValue/initialValue = undefined
    //1.1 preValue = collection[0] || 2
//2. collection[i] = 3, preValue/initialValue = 2
    //2.1 elem = 3 and sum = 2 --> 3+2 = 5
//3. collection[i] = 5, preValue/initialValue = 5
    //3.1 elem = 5 and sum = 5 --> 5+5 = 10
//4. result = 10

let algo2 = _.reduce([1, 2, 3], (elem, sum) =>  elem + sum, 0)
//1. collection[i] = 1, preValue/initialValue = 0
    //1.1 elem = 1 and sum = 0 --> 1+0 = 1
//2. collection[i] = 2, preValue/initialValue = 1
    //2.1 elem = 2 and sum = 1 --> 2+1 = 3
//3. collection[i] = 3, preValue/initialValue = 3
    //3.1 elem = 3 and sum = 3 --> 3+3 = 6
//4. result = 6

console.log(algo)
console.log(algo2)

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const notInRoom = (suspect, memo) => {
    //return an array of all the falses
    
   const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
        if (room === false) memo.push(room);          
        return memo;
},[]);
    return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom);

let int = _.intersection(...notInRooms)

console.log(int)

// reduce(newDevelopment, notInRoom, [])

// let roomEmpty = _.reduce(newDevelopment, (elem, preValue) => {
//     //console.log(elem.rooms)
//     let algo3 = _.reduce(elem.rooms, (room, memo) =>{
        
//         // let valueRoom = Object.values(room).push(memo);
//         // let memor = []
      
//         console.log(room)


//         // for (let [key, value] of room) {
//         //     console.log(key)
//         // }
        
//         // for (let i = 0; i <valueRoom.length; i++){
//         //     if (valueRoom[i] === false) {
//         //         memor.push(room);
//         //     }
//         // }
//         // console.log('le memo' , memor)

//     },[])
//     //console.log('adios', algo3)
// });
 
// console.log(roomEmpty)