import React from 'react'
import './SearchBar.css'

function SearchBar(props) {

return(
<div  className='search-container'>
    <label htmlFor='search'>Movie Title</label>
    <input 
        type='text' 
        name='search' 
        id='search'
        onChange={props.filterMovies}
    />
</div>
)
}

export default SearchBar;