var fs = require('fs')

function createFood(food) {
    var foods = JSON.parse(fs.readFileSync("./food.json", 'utf8'))
    console.log(JSON.stringify(foods))
    foods.push(food)
    console.log(JSON.stringify(foods))
    fs.writeFileSync("./food.json", JSON.stringify(foods, null, 2))
}

module.exports = createFood