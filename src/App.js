import './App.css';
import { useState, useEffect } from "react";
const baseURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=583bc72a&'

export function App() {

const [movies, setMovies] = useState([]);

const getMovieList = () => {
  fetch(baseURL)
  .then((response) => response.json())
  .then((results) => console.log(results))
}

useEffect(() => {
  getMovieList();
}, [])

  return (
    <div className="App">
      <h1>Movies</h1>
    </div>
  );
}

export default App;
