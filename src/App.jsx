import Home from  "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx";
import "./App.css";
import MovieCard from "./components/MovieCard";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/favorites' element={ <Favorites />}></Route>
      </Routes>
  );
}


export default App;
