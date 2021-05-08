import { React, useState, useEffect } from "react";
// import MovieCard from "./components/movieCard/MovieCard";
// import NominatedCard from "./components/nominated/NominatedCard";
import SearchBar from './components/searchBar/SearchBar'
import FilteredMovies from "./containers/FilteredMovies";
import Nominations from "./containers/Nominations"
import { useAlert } from 'react-alert'
import './Main.css'
const baseURL = 'http://www.omdbapi.com'

export default function Main() {

    const [filteredMovies, setFilteredMovies] = useState([])
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('')
    const [nominated, setNominated] = useState([])
    const alert = useAlert()

    const getMovieList = () => {
        fetch(`${baseURL}/?s=${search}&apikey=583bc72a&`)
        .then((response) => response.json())
        .then((setMovies))
    }
    console.log(movies)

    useEffect(getMovieList, [search])


    const filterMovies = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    useEffect(() => setFilteredMovies(movies), [movies])
    console.log(filteredMovies)

    const toggleSearchResults = () => {
        if (search) {
            return  <h2> Search result for "{search}" </h2>
        }
    }

    const addNomination = (nomination) => {
        if (nominated.length === 5) {
            return alert.show('Sorry you can only have five nominations at a time')
        } else {
            let chosenMovie = filteredMovies.Search.find(myMovie => nomination.imdbID === myMovie.imdbID)
                    setNominated(nominated.concat(nomination))
        }        // setIsNominated(!isNominated)
    }

    const toggleNominations = () => {
        if (search) {
            return  <h2> Nominations </h2>
        }
    }

    const removeNomination = (nomination) =>  {
        let newList = nominated.filter(removeMovie => removeMovie.imdbID !== nomination.imdbID)
            setNominated(newList)
    }


    return (
        <div className='main'>
            <h1>The Shoppies</h1>
            <SearchBar filterMovies={filterMovies}/>
            <div className='results-container'>
                <div className='search-results-container'>
                    <FilteredMovies 
                    filteredMovies={filteredMovies} 
                    toggleSearch={toggleSearchResults}
                    addNominations={addNomination} 
                    />
                </div>
                <div className='nominations-container'>
                    <Nominations 
                    nominated={nominated}
                    remove={removeNomination}
                    toggleNominations={toggleNominations}
                    />
                </div>
            </div>
        </div>
    )
}
