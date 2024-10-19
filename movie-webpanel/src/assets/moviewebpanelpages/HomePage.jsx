
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching popular movies:', error);
            });
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            <div className="movie-list">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>

                        </Link>
                        <p>Rating: {movie.vote_average}/10</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
