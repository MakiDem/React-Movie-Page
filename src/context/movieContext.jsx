import { useState, useEffect } from "react";
import { MovieContext } from "./movieProvider.js";  


export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites))
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites) )
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter((fav) => fav.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some(favorite => favorite.id === movieId)
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }

  return <MovieContext.Provider value={value}>
    {children}
  </MovieContext.Provider>
}