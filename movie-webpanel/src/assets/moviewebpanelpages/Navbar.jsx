
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/search?query=${query}`);
        }
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/top-rated">Top Rated</Link>
            <Link to="/upcoming">Upcoming</Link>


            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;