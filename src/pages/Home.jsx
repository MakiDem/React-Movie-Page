import MovieCard from "../components/MovieCard.jsx"
import {useState, useEffect} from "react"
import '../css/Home.css'
import { getPopularMovies, searchMovies } from "../services/api.js"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleSearch = async (e) => {
    e.preventDefault()

    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)

    try {
      const results = await searchMovies(searchQuery)
      setMovies(results)
      setError(null)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const loadPopularMovies = async() => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

  return (
    <div className = "home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => {
          setSearchQuery(e.target.value)
        }}/>
        <button type="submit">Search</button>
      </form>

      {error ? (
        <div>
          {`Error: ${error}. Please try again later.`}
        </div>
      ): (
        <div className = 'movies-grid'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard movie = {movie} key={movie.id}/>
            ))}
          </div>
        )}
      </div>
      )}
    </div>
  )
}

export default Home