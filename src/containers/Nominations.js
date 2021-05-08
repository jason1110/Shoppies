import { React, useState, useEffect } from "react";
import MovieCard from '../components/movieCard/MovieCard'

export default function Nominations(props) {

    const showNominations = () => {
        if (props.nominated) {
            return props.nominated.map(movie => 
                <MovieCard 
                    movie={movie}
                    title={movie.Title} 
                    year={movie.Year} 
                    key={movie.index} 
                    remove={props.remove}
                />
            )
        }
    }

    return (
        <>
        {(props.nominated !== [])
        ? <div>
        {props.toggleNominations()}
        {showNominations()}
        </div>
        : ''    
        }
        </>
    )
    //     <div>
    //         {props.toggleNominations()}
    //         {(props.nominated != []) ? showNominations() : ''}
    //     </div>
    // )
}
