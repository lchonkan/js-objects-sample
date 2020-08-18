// Select Elements from the DOM
const addMovieBtn = document.getElementById('add-movie-btn');
const serachBtn = document.getElementById('search-btn');

//Defining global variables
const movies = [];

//Function definitions

const addMovieHandler = () => {
    //We want to grab the user input and the add them to the movie
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    //We perform some validation on the inputs before attempting to use them
    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    //construct a new movie

    const newMovie = {
        info: { title, [extraName]: extraValue },
        id: Math.random(),
    };

    movies.push(newMovie);
    console.log(newMovie);
};

//Add event listeners to buttons
addMovieBtn.addEventListener('click', addMovieHandler);

