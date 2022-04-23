

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
        },
    map:
        function (list, callback){
            let storage = [];
            // for (let i = 0; i < list.length; i++) {
            //     storage.push(callback(list[i], i, list));
            // }
            this.each(list, function(elem, i, list){
                storage.push(callback(elem, i, list));
            })
            return storage;
        }
}


let newArr = _.map([1,2,3,4,5], function (val){
    return val + 1
})
console.log(newArr)