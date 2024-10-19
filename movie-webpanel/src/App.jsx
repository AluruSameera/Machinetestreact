

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './assets/moviewebpanelpages/HomePage';
import TopRatedPage from './assets/moviewebpanelpages/TopRatedPage';
import UpcomingPage from './assets/moviewebpanelpages/UpcomingPage';
import MovieDetailPage from './assets/moviewebpanelpages/MovieDetailPage';
import Navbar from './assets/moviewebpanelpages/Navbar';
import SearchPage from './assets/moviewebpanelpages/SearchPage';



function App() {
  return (
    <Router>
   
<Navbar/>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/top-rated" element={<TopRatedPage />} />
      <Route path="/upcoming" element={<UpcomingPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </Router>
  );
}

export default App;
