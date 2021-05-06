import { React, useState, useEffect } from "react";
import MovieCard from "./components/movieCard/MovieCard";
import SearchBar from './components/searchBar/SearchBar'

export default function Main({movies, setMovies, search, setSearch}) {

const [filteredMovies, setFilteredMovies] = useState([])

const filterMovies = (event) => {
    setSearch(event.target.value.toLowerCase())
}

useEffect(() => setFilteredMovies(movies), [movies])
console.log(filteredMovies)

const eachMovie = () => {
    if (filteredMovies.Search) {
    return filteredMovies.Search.map(movie => <MovieCard title={movie.Title}/>)
    }
}


    return (
        <div>
            <h1>The Shoppies</h1>
            <SearchBar filterMovies={filterMovies}/>
            {eachMovie()}
        </div>
    )
}
