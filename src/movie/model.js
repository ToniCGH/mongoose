const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,        
    },
    actor: {
        type: String,
        default: "Not specified",
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        default: "Not specified",
    },
    rating: {
        type: String,
        default: "Not specified",
    }
});

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;