import Home from  "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"


function App() {
  return (
    <div>
      <NavBar/>

      <main>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/favorites' element={ <Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
}


export default App;
