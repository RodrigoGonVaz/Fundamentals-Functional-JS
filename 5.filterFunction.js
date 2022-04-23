


//* .filter() -> a function that takes an array and a callback and it will return a new array, similar to map, that contains the values that are true to the callback

let _ = {};

_.each =
        function (list, callback) {
            if (Array.isArray(list)) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i, list) // value - index - list (generic fuinction)
            }} else {
                for (let key in list) {
                    callback(list[key], key, list) // value - prop name - list
            }}    
    }

_.filter = function(arr, callback) {
    const storage = [];

    _.each(arr, function(elem, i, list) {
        if (callback(elem, i, list) === true) {
            storage.push(elem);
        }
    })
    // for (let i = 0; i < arr.length; i++) {
    //     if (callback(arr[i], i, arr) === true) { //The callback may need the value or index or the entire list
    //         storage.push(arr[i]);
    //     }   
    // }
    return storage;
}

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];


//Si cumple la condicion del filtro de que es verdadero elem.present, entonces hace un nuevo arreglo con todo el elem o suspect object
let suspects = _.filter(videoData, function(elem, i, list) { // elem = Suspects Objects
    return elem.present
})


console.log(suspects)