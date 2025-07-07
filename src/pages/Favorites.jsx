import '../css/Favorites.css'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites')
    if (storedFavs) setFavorites(JSON.parse(storedFavs))
  }, [])

  console.log(favorites)

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        <div className='movies-grid'>
          <h2>Favorite Movies</h2>
          {favorites.map((fav) => (
            <MovieCard movie={fav}/>
          ))}
        </div>
      ): (
        <div className='favorites-empty'>
          <h3>No Favorites Yet</h3>
          <p>Start adding your favorite movies</p>
        </div>
      )}
    </div>
  )
}

export default Favorites