import { React, useState, useEffect } from "react";
import MovieCard from '../components/movieCard/MovieCard'
import './Containers.css'

export default function FilteredMovies(props) {

    const eachMovie = () => {
        if (props.filteredMovies.Search) {
            return props.filteredMovies.Search.map(movie => 
                <MovieCard 
                    movie={movie}
                    title={movie.Title} 
                    year={movie.Year} 
                    key={movie.imdbID}
                    poster={movie.Poster}
                    imdbID={movie.imdbID}
                    nominate={props.addNominations}
                    isNominated={props.isNominated}
                    setIsNominated={props.setIsNominated}      
                />
            )
        }
    }

    useEffect( eachMovie, [props.filteredMovies, props.addNominations, props.isNominated, props.setIsNominated] )

    return (
        <div className='container' id='filtered-movies-container'>
            {props.toggleSearch()}
            {eachMovie()}
        </div>
    )
}
