import Home from  "./pages/Home.jsx"
import Favorites from "./pages/Favorites.jsx";
import "./css/App.css";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"
import { MovieProvider } from "./context/movieContext.jsx";


function App() {
  return (
    <MovieProvider>
      
        <NavBar/>
        <main>
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/favorites' element={ <Favorites />}></Route>
          </Routes>
        </main>
      
    </MovieProvider>
  );
}


export default App;
