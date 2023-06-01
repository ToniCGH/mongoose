const Movie = require("./model");


// Add movie
exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
};

// List movies

exports.listMovies = async () => {
    try {
        const movieList = await Movie.find({})
        console.log(movieList)        
    } catch (error) {
        console.log(error) 
    }
};

// Update movies

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne(
            { title: movieObj.title },
            { title: movieObj.newTitle, 
              actor: movieObj.newActor, 
              year: movieObj.newYear, 
              genre: movieObj.newGenre, 
              rating: movieObj.newRating }
        )
    } catch (error) {
        console.log(error)
    }
};

// Delete movie

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj)
    } catch (error) {
        console.log(error)
    }
};

// Search for a movie

exports.searchMovie = async (movieObj) => {
    try {
        const result = await Movie.findOne(movieObj)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
};
