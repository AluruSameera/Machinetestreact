
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const MovieDetailPage = () => {
    const { id: movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {

                const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
                setMovie(movieResponse.data);


                const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
                setCredits(creditsResponse.data.cast);
            } catch (error) {
                console.error("Error fetching movie details or credits:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-detail">
            <div className="movie-header">
                <img className="movie-poster-left" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

                <div className="movie-details">
                    <h1>{movie.title}</h1>
                    <p>Rating: {movie.vote_average}/10</p>
                    <p>Runtime: {movie.runtime} minutes</p>
                    <p>Release Date: {movie.release_date}</p>
                    <h2>Overview</h2>
                    <p className="overview-text">{movie.overview}</p>
                </div>

                <img className="backdrop-image-right" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Backdrop" />
            </div>

            <h3 >Cast:</h3>
            <div className="cast-list">

                {credits.length > 0 ? (
                    credits.map(member => (
                        <div key={member.id} className="cast-member">
                            <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} />
                            <h4>{member.name}</h4>
                            <p>{member.character}</p>
                        </div>
                    ))
                ) : (
                    <p>No cast information available.</p>
                )}
            </div>
        </div>
    );
};

export default MovieDetailPage;
