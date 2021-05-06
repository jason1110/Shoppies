import React from 'react'

export default function MovieCard(props) {

    console.log(props.title)

    // .map((movie) => console.log(movie))
    return (
        <div>
            <h1> Movie </h1>
            {props.title}
        </div>
    )
}
