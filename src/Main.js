import { React, useState, useEffect, useCallback } from "react";
import SearchBar from './components/searchBar/SearchBar'
import FilteredMovies from "./containers/FilteredMovies";
import Nominations from "./containers/Nominations"
import { useAlert } from 'react-alert'
import './Main.css'
import Title from './assets/title.png'
const baseURL = 'http://www.omdbapi.com'

export default function Main() {

    const [filteredMovies, setFilteredMovies] = useState([])
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('')
    const [nominated, setNominated] = useState([])
    const [isNominated, setIsNominated] = useState(false)
    const alert = useAlert()

    const getMovieList = () => {
        fetch(`${baseURL}/?s=${search}&apikey=583bc72a&`)
        .then((response) => response.json())
        .then(setMovies)
    }

    useEffect(getMovieList, [search])


    const filterMovies = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    useEffect(() => setFilteredMovies(movies), [movies])

    const toggleSearchResults = () => {
        if (search) {
            return  <h2> Search result for "{search}" </h2>
        }
    }

    const addNomination = (nomination) => {
        console.log(nominated)
        if (nominated.length === 5) {
            return alert.show('Sorry you can only have five nominations at a time')
        } else {
            setNominated([...nominated, nomination])
            let chosenMovie = filteredMovies.Search.find(myMovie => nomination.key === myMovie.imdbID)
            if(chosenMovie) {  
                setIsNominated(true) 
            } 
        }
    }

    const toggleNominations = () => {
        if (search) {
            return  <h2> Nominations </h2>
        }
    }

    const removeNomination = (imdbID) =>  {
        console.log(nominated)
        setNominated(nominated.filter(removeMovie => removeMovie.imdbID !== imdbID))
        if (nominated.find(myMovie => imdbID === myMovie.imdbID)){
            setIsNominated(false)
        }
    }

    return (
        <div className='main'>
            <h1 className='title'><img id='title' src={Title} alt='The Shoppies title'/></h1>
            <SearchBar className='search-bar' filterMovies={filterMovies}/>
            <div className={search ?'results-container' : 'results-hidden'}>
                <div className='search-results-container'>
                    <FilteredMovies 
                    filteredMovies={filteredMovies} 
                    toggleSearch={toggleSearchResults}
                    addNominations={addNomination}
                    isNominated={isNominated}
                    setIsNominated={setIsNominated}
                    
                    />
                </div>
                <div className='nominations-container'>
                    <Nominations 
                    nominated={nominated}
                    remove={removeNomination}
                    toggleNominations={toggleNominations}
                    isNominated={isNominated}
                    setIsNominated={setIsNominated}     
                    />
                </div>
            </div>
        </div>
    )
}
