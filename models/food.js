const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    name:String,
    origin:String,
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food;