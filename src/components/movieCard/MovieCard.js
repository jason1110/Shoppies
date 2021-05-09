import React, {  useState, useEffect } from "react";
import './MovieCard.css'

export default function MovieCard(props) {

    const [isNominated, setIsNominated] = useState(false)
    
    const handleClick = () => {
        if(props.nominate){  
            props.nominate(props.movie);
            toggleNominateButton();
            console.log( {nominate: isNominated, movie: props.movie} )
        } else {
            props.remove(props.imdbID);
            toggleNominateButton()
            console.log( {remove: isNominated, movie: props.movie})
            
        }
    }

    const toggleNominateButton = () => {
        setIsNominated(!isNominated);
    }
    
        console.log(props.nominated)
        return (
            <div className='movie-card-result'>
                <img className='movie-poster' src={props.poster} alt='movie poster'/>
                <div className='title-button' >
                    <div className='movie-info'>
                        <p id='title'>{props.title}</p>
                        <p id='year'>({props.year})</p>
                    </div>
                    {props.nominated 
                    ? 
                    <button 
                    className='button'
                    id='remove-button'
                    name='remove'
                    onClick={ handleClick }
                    >
                        Remove
                    </button>
                    :<button 
                    className='button' 
                    id='nominate-button'
                    name='nominate' 
                    onClick={ handleClick }
                    disabled={ isNominated }
                    >
                        Nominate
                    </button>
                    }
                </div>
            </div>
        )
}
