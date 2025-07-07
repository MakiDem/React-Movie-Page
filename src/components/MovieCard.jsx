import { useMovieContext } from '../context/movieProvider.js';
import '../css/MovieCard.css'

function MovieCard ({ movie }) {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite = isFavorite(movie.id)

  function onFavorite(e) {
    e.preventDefault()

    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie.id)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavorite}>
            ♡
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )

}

export default MovieCard;