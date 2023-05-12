var fs = require('fs')

function getAllFoods() {
    
    var foods = JSON.parse(fs.readFileSync("./food.json", 'utf8'))
    return JSON.stringify(foods)
}

module.exports = getAllFoods