import { React, useState, useEffect } from "react";
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
        fetch(`${baseURL}/?s=${search}&type=movie&apikey=583bc72a&`)
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
            return  <h2> Search results for "{search}" </h2>
        }
    }

    const addNomination = (nomination) => {
        console.log(nominated)
        if (nominated.length === 5) {
            return alert.show('You have 5 nominations selected already')
        } else {
            setNominated([...nominated, nomination])
            let chosenMovie = filteredMovies.Search.find(myMovie => nomination.key === myMovie.imdbID)
            // if(chosenMovie) {  
                
            // } 
        }
    }

    const toggleNominations = () => {
        if (search) {
            return  <h2> Your Nominations </h2>
        }
    }

    const removeNomination = (imdbID) =>  {
        console.log(nominated)
        setNominated(nominated.filter(removeMovie => removeMovie.imdbID !== imdbID))
        // if (nominated.find(myMovie => imdbID === myMovie.imdbID)){
        //     setIsNominated(isNominated)
        // }
    }

    return (
        <div className='main'>
            <h1 className='title'><img id='title' src={Title} alt='The Shoppies title'/></h1>
            <SearchBar className='search-bar' filterMovies={filterMovies} />
            <div className='results-container'>
                <div className= {search ? 'search-results-container' : 'results-hidden'}>
                    <FilteredMovies 
                    filteredMovies={filteredMovies} 
                    toggleSearch={toggleSearchResults}
                    addNominations={addNomination}
                    isNominated={isNominated}
                    setIsNominated={setIsNominated}
                    
                    />
                </div>
                <div className={ (nominated.length !== 0) ? 'nominations-container' : 'results-hidden'}>
                    <Nominations 
                    nominated={nominated}
                    remove={removeNomination}
                    toggleNominations={toggleNominations}
                    isNominated={isNominated}
                    setIsNominated={setIsNominated}     
                    />
                </div>
            </div>
            <div className={!search && (nominated.length === 0) ? 'placeholder' : 'results-hidden'}>
                <h1> Search for your top 5 favorite movies to nominate!</h1>
            </div>
        </div>
    )
}
