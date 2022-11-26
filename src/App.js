import './App.css';
import { getMovies, searchMovie } from './api.js'
import { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then((results) => {
      setMovies(results)
    })
  }, [])

  const search = async (query) => {
    if (query.length === 0) {
      getMovies().then((results) => {
        setMovies(results)
      })
    }
    if (query.length > 3) {
      const results = await searchMovie(query)
      setMovies(results)
    }
  }

  const Movies = () => {
    return movies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} className="Movie-image" />
          <div className="Movie-date">Release: {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Moovie Search</h1>
        <input
          type="text"
          placeholder='Search movie...'
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <Movies />
        </div>
      </header>
    </div>
  );
}

export default App;
