
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

const SearchPage = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {

            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&query=${query}`)
                .then(response => {
                    setResults(response.data.results);
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        }
    }, [query]);

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <div className="movie-list">
                {results.length > 0 ? (
                    results.map(movie => (
                        <div key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <h2>{movie.title}</h2>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No results found for "{query}"</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;



