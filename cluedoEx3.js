

let _ = {
    each: 
        function (list, callback) {
            if (Array.isArray(list)) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i, list) // value - index - list (generic fuinction)
            }} else {
                for (let key in list) {
                    callback(list[key], key, list) // value - prop name - list
            }}    
        }}

//Prueba del _.each en un Arreglo
_.each(['Rod', 'George', 'Reb', 'Caro'], function (name, i, list){
    if (list[i + 1]) {
        console.log(name, 'is smaller than', list[i + 1])
    } else {
        console.log(name, 'is the oldest')
    }
})

//Prueba del _.each en un Objeto

_.each({name: 'Rafa', name2: "Mon", name3: 'Irene', name4: 'Rafael Hector'}, function (nameOb, key, listOb){
    let ordenar = Object.keys(listOb).sort();
    //console.log(ordenar) --> [ 'name', 'name2', 'name3', 'name4' ] -> Lo ordena 4 veces
        _.each(ordenar, function (name, i, list){
            if (list[i + 1]) {
                let keyProp = list[i + 1]
                console.log(nameOb, 'is smaller than', listOb[keyProp])
            } else {
                console.log(nameOb, 'is the oldest')
        }})
})


//Funcion con la clase para crear Suspects
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


_.each(suspects, function (name){
    suspectsList.push(CreateSuspectObjects(name));
});

console.log(suspectsList[1].color)