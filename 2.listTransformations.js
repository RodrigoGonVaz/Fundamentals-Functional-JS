// NESTING
/*
const game = {};
game['suspects'] = [];
const game = {
    suspects: [],
};
*/

let game = {};
game['suspects'] = [];
game.suspects.push({
    name: 'Rusty',
    color: 'orange'
})

game = {
    suspects: [
        {
            name: 'Rusty',
            color: 'orange'
        }
    ],
};

game.suspects[1] = {
    name: 'Miss Scarlet',
    color: 'red'
};

game = {
    suspects: [
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ],
};

//console.log(game['suspects']) // [{ name: 'Rusty', color: 'orange'}, { name: 'Miss Scarlet', color: 'red'}]

for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]) // { name: 'Rusty', color: 'orange' } || { name: 'Miss Scarlet', color: 'orange'}
    console.log(game.suspects[i].name) // Rusty || Miss Scarlet
    console.log(game.suspects[i].color) // orange || red
}

function clue () {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log('outer loop') // 2 veces hace el loop
        for(let key in game.suspects[i]) {
            console.log('inner loop') // 4 veces hace el loop
            if (game.suspects[i][key] === 'red') {
                console.log('The suspect is:', game.suspects[i].name)
            } else {
                console.log('next time!')
            }
        }
    }
}
clue()
//outer loop
//inner loop - //'next time!'
//inner loop - //'next time!'
//outer loop
//inner loop - //'next time!'
//inner loop - //'The suspect is:', game.suspects[i].name

let [{color: firstColor}, {color: secondColor}] = [{color: 'orange'}, {color: 'red'}];
console.log(firstColor, secondColor)
let [color, color2] = [game.suspects[0].color, game.suspects[1].color]
console.log(color, color2)
let [{color: first}, {color: second}] = game.suspects;
console.log(first, second)