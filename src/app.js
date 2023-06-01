require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, updateMovie, deleteMovie, searchMovie } = require("./movie/methods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            // add movie function that takes yargsObj terminal input
            await addMovie({ 
                title: yargsObj.title, 
                actor: yargsObj.actor,
                year: yargsObj.year,
                genre: yargsObj.genre,
                rating: yargsObj.rating
             });
            console.log(`Successfully added ${yargsObj.title} (${yargsObj.year})`);
        } else if (yargsObj.list) {
            // list movies from database
            await listMovies()
        } else if (yargsObj.update) {
            // update movies with filterObj and updateObj
            await updateMovie(yargsObj)
            console.log(`Successfully updated movie`)
        } else if (yargsObj.delete) {
            // delete movie with filterObj
            await deleteMovie({title: yargsObj.title})
            console.log(`Successfully deleted ${yargsObj.title}`)
        } else if (yargsObj.searchMovie) {
            // Search for a movie
            await searchMovie({title: yargsObj.title})            
        } else {
            console.log("Incorrect Command");
        }
        await mongoose.disconnect()
    } catch (error) {
      console.log(error);
      await mongoose.disconnect()
    }
};

app(yargs.argv)

// node src/app.js --add --title="Big Daddy" --year=1999
// node src/app.js --add --title="The Matrix" --actor="Keanu Reeves" --year=1999 --genre="action" --rating="15"
// node src/app.js --delete --title="Spider Man"
// node src/app.js --list
// node src/app.js --searchMovie --title="The Matrix"
// node src/app.js --update --title="The Matrix" --newRating="15"
