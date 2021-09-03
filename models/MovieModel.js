const mongoose = require("mongoose");

const Schema = mongoose.Schema

const movieSchema = new Schema({
    title:String,
    release:String,
    overview:String,
    img:String,
    rating:Number,
    onClick:Function,
    text:String,
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie