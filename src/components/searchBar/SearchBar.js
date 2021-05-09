import React from 'react'
import './SearchBar.css'

function SearchBar(props) {

const handleClear = () => {
    EventTarget.value = ''
    props.setSearch('')
} 


return(
<div  className='search-container'>
    <label htmlFor='search'>Movie Title</label>
    <input 
        type='search' 
        name='search' 
        id='search'
        onChange={props.filterMovies}
        value={props.search}
    />
</div>
)
}

export default SearchBar;