import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';
import AddFavourites from './Save'

const App = () => {
    const [favourites, setFavourites] = useState([]);
	const [movies, setMovies] = useState([
		{
			Title: 'Star Wars: Episode IV - A New Hope',
			Year: '1977',
			imdbID: 'tt0076759',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		},
		{
			Title: 'Star Wars: Episode V - The Empire Strikes Back',
			Year: '1980',
			imdbID: 'tt0080684',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		},
		{
			Title: 'Star Wars: Episode VI - Return of the Jedi',
			Year: '1983',
			imdbID: 'tt0086190',
			Type: 'movie',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
		},
        {
            Title:"Star Wars",
            Year:"2017",
            imdbID:"tt2527336",
            Type:"movie",
            Poster:"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"},
         {
             Title:"Star Wars",
             Year:"2005",
            imdbID:"tt0121766",
            Type:"movie",
            Poster:"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"},
	]);

    const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};
   
   
    

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
            <div className='row'>
				{/* <MovieList movies={movies} favouriteComponent={AddFavourites}
					handleFavouritesClick={addFavouriteMovie}/> */}
			</div>
		</div>
	);
};

export default App;