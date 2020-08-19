'strict-mode';

// Select Elements from the DOM
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

//Defining global variables
const movies = [];

//Function definitions

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    movies.length === 0
        ? movieList.classList.remove('visible')
        : movieList.classList.add('visible');

    movieList.innerHTML = '';

    const filteredMovies = !filter
        ? movies
        : movies.filter((movie) => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        if ('info' in movie) {
        }
        const { info, ...otherProps } = movie;
        //const { title: movieTitle } = info;
        let { getFormattedTitle } = movie;
        //getFormattedTitle = getFormattedTitle.bind(movie);
        let text = getFormattedTitle().call(movie) + ' - ';
        console.log(otherProps);
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key} : ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

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
        info: { 
            title,
             [extraName]: extraValue },
        id: Math.random().toString(),
        getFormattedTitle() {
            return this.info.title.toUpperCase();
        },
    };

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

//Add event listeners to buttons
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
