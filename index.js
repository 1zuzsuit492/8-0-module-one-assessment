/*
  Do not change the line below. If you'd like to run code from this file, 
  you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //1. create an array 
  let newArr = [];
  //2. use a loop because movies is an array
  for(let i = 0; i < movies.length; i++){
    movie = movies[i];
    newArr.push(movie.title) //adding moving titles to the new array.
    
  }
  return newArr; //new array that is being returned.
}
/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  if(movies.length === 0){ //put this outside of loop
    return 0; //return 0 if array is empty/
  }
  //1. declare variable that's being returned.
  let currentMovie = movies[0].metascore// --> comparing one movie to others
  //loop
  for(let i = 0; i < movies.length; i++){
    if(currentMovie < movies[i].metascore){
    currentMovie = movies[i].metascore; //redeclared variable
    }
  }
  return Number(currentMovie);
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. 
 * If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if(movies.length === 0){
    return 0; // if movies array is empty return 0
  }

  let avg = 0; //default value for average
  for(let i = 0; i < movies.length; i++){ //loop
    movie = movies[i];
    avg += movie.imdbRating/movies.length; // how to calculate avg
  }
  return avg //number being returned
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values 
 * are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are 
 * how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */

//look at 'rated' property//
//return obj
function countByRating(movies) {
  let newObj = {};
  if(movies.length === 0){
    return newObj;
  }
  for(let i = 0; i < movies.length; i++){
    newObj[movies[i].rated] = (newObj[movies[i]] || i++)
    
  
  }
return newObj
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. 
 * If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if(movies.length === 0){ //if there are no movies
    return null
  }
  else if(!movies.includes(id)){ //if movie doesnt match ID,
    return null
  }
    let newObj = {} // new obj
    for(let i = 0; i < movies.length; i++){
      movie = movies[i]
      if(movie.includes(id)){
        newObj = movie.title
      }

    }
    return newObj;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. 
 * If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
//put whole movie index into an array//

  let newArr = [] //default value
  if(movies.genre !== genre){
    newArr;
  }
  else if(movies.length === 0){
    newArr;
  }

  //loop//
  for(let i = 0; i < movies.length; i++){
    movie = movies[i]
    if(movie.includes(genre)){
    newArr.push(movie)
    }
  }
  return newArr;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let newArr = [];

  for(let i = 0; i < movies.length; i++){
    if(movies[i].released <= year){
      newArr.push(movies[i])
    }
  }
  return newArr;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if(movies.length === 0){ //put this outside of loop
    return null; //return 0 if array is empty/
  }
  //1. declare variable that's being returned.
  let currentMovie = movies[0].boxOffice// --> comparing one movie to others
  //loop
  for(let i = 1; i < movies.length; i++){
    if(currentMovie < movies[i].boxOffice){
    currentMovie = movies[i].title; //redeclared variable
    }
    // else if(currentMovie <= movies[i].boxOffice){
    //   currentMovie = movies[i].title
    // }
  }
    return currentMovie;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
