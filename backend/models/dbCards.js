const mongoose = require('../database/conn');
const cardSchema = mongoose.Schema({
 name: String,
 imgUrl: String
})
module.exports =  mongoose.model('cards', cardSchema)


