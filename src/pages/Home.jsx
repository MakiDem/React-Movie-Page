import MovieCard from "../components/MovieCard.jsx"
import {useState, useEffect} from "react"
import '../css/Home.css'
import { getPopularMovies } from "../services/api.js"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleSearch = (e) => {
    e.preventDefault()
    alert("Searching movie...")
  }

  useEffect(() => {
    const loadPopularMovies = async() => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch(err) {

      } finally {

      }
    }
  }, [movies])

  return (
    <div className = "home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => {
          setSearchQuery(e.target.value)
        }}/>
        <button type="submit">Search</button>
      </form>

      <div className = 'movies-grid'>
        {movies.map(movie => (
          <MovieCard movie = {movie} key={movie.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home