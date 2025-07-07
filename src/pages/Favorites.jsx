import '../css/Favorites.css'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites')
    if (storedFavs) setFavorites(JSON.parse(storedFavs))
  }, [])

  

  return (
    <div className="favorites">
      {favorites ? (
        <div className='movies-grid'>
          {favorites.map((fav) => (
            <MovieCard movie={fav}/>
          ))}
        </div>
      ): (
        <h3>No Favorites Yet</h3>
      )}
    </div>
  )
}

export default Favorites