import './App.css';
import { React, useState, useEffect } from "react";
import Main from './Main'
const baseURL = 'http://www.omdbapi.com'

export function App() {

const [movies, setMovies] = useState([]);
const [search, setSearch] = useState('')

const getMovieList = () => {
  fetch(`${baseURL}/?s=${search}&apikey=583bc72a&`)
  .then((response) => response.json())
  .then((setMovies))
}
console.log(movies)


useEffect(getMovieList, [search])

  return (
    <div className="App">
      <Main movies={movies} setMovies={setMovies} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
