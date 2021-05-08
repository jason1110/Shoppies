import { React, useState, useEffect } from "react";
import './MovieCard.css'

export default function MovieCard(props) {

    const [isNominated, setIsNominated] = useState(false)

    const handleClick = () => {
        if(props.nominate){
            props.nominate(props.movie)
            console.log(isNominated)
        } 
        else {
            console.log(isNominated)
            props.remove(props.movie)
        }
    }
    
    const toggleNominateButton = () => {
        setIsNominated(!isNominated)
    }

    return (
        <div className='movie-card-result'>
            {props.title}
            ({props.year})
            {props.nominate 
            ? <button 
            className={isNominated
                ? 'nominate-button-deactivated'
                : 'nominate-button-active' 
            }
            name='nominate' 
            onClick={ handleClick }
            disabled={isNominated} 
            >
            Nominate
            </button>
            : <button name='remove'
            onClick={ handleClick }
            >
            Remove
            </button>

            }

        </div>
    )
}
