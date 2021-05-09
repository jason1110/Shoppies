import { React, useState, useEffect } from "react";
import MovieCard from '../components/movieCard/MovieCard'
import './Containers.css'

export default function Nominations(props) {

    const showNominations = () => {
        if (props.nominated) {
            return props.nominated.map(movie => 
                <MovieCard 
                    movie={movie}
                    title={movie.Title} 
                    year={movie.Year}
                    poster={movie.Poster}
                    key={movie.imdbID}
                    imdbID={movie.imdbID}
                    remove={props.remove}
                    nominated={props.nominated}
                    isNominated={props.isNominated}
                    setIsNominated={props.setIsNominated}
                />
            )
        }
    }

    useEffect( showNominations, [props.nominated, props.isNominated, props.remove, props.setIsNominated] )

    return (
        <>
        {(props.nominated !== [])
        ? <div className='container' id='nominations-container'>
        {props.toggleNominations()}
        {showNominations()}
        </div>
        :null 
        }
        </>
    )
}
