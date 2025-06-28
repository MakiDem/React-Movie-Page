import MovieCard from "../components/MovieCard.jsx"
import {useState} from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const movies = [
    {id: 1, title: "Train To Busan", release_date: 2024},
    {id: 2, title: "28 Years Later", release_date: 2006},
    {id: 3, title: "Titanic", release_date: 2021},
    {id: 4, title: "Your Name", release_date: 2015},
    {id: 5, title: "Infinity Train", release_date: 1987},
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    alert("Searching movie...")
  }

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