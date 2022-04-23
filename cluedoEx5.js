
let _ = {};

_.each = function(list, callback){

    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
        for(let key in list) {
            callback(list[key], key, list)
        }
    }
}

_.filter = function(arrList, callback){
    const storage = [];

    _.each(arrList, function(elem, i, list){
        if (callback(elem, i, list) === true) {
            storage.push(elem)
        }
    })
    return storage;
}


_.map = function (list, callback){
    let storage = [];

    this.each(list, function(elem, i, list){
        storage.push(callback(elem, i, list));
    })
    
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

let suspects = _.filter(videoData, function(elem, i, list) { // elem = Suspects Objects
    return elem.present
})


console.log(suspects)

let newArr = _.map(suspects, function(elem, i, list){
    return elem.name
})

console.log(newArr)

let newArrFilter = _.filter(newArr, function(elem, i, list){
    return elem ===  'Miss Scarlet'
})

console.log(newArrFilter)