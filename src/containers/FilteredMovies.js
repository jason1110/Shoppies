import { React, useState, useEffect } from "react";
import MovieCard from '../components/movieCard/MovieCard'

export default function FilteredMovies(props) {

    const eachMovie = () => {
        if (props.filteredMovies.Search) {
            return props.filteredMovies.Search.map(movie => 
                <MovieCard 
                    movie={movie}
                    title={movie.Title} 
                    year={movie.Year} 
                    key={movie.index} 
                    nominate={props.addNominations}
                    // nominated={isNominated}
                />
            )
        }
    }

    useEffect( eachMovie, [props.filteredMovies] )

    return (
        <div>
            {props.toggleSearch()}
            {eachMovie()}
        </div>
    )
}
