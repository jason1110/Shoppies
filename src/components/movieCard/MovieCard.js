import React, { Component } from "react";
import './MovieCard.css'

export default class MovieCard extends Component {

    constructor() {
        super();
        this.state = {
          disable: false,
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.toggleNominateButton = this.toggleNominateButton.bind(this)
      }
    

    handleClick = () => {
        if(this.props.nominate){   
            this.props.nominate(this.props.movie);
            this.toggleNominateButton();       
            console.log( {nominate: this.state.disable, movie: this.props.movie} )
        } else {
            this.props.remove(this.props.imdbID);
            this.toggleNominateButton();
            console.log( {remove: this.state.disable, movie: this.props.movie})
            
        }
    }

    toggleNominateButton = () => {
       if(this.props.imdbID) 
        this.setState({ disable: !this.state.disable});
    }
    
    // handleRemove = () => {
    //     this.props.remove(this.props.imdbID)
    //     this.toggleNominateButton.bind(this)
    // }
    render() {
        console.log(this.props.nominated)
        return (
            <div className='movie-card-result'>
                <img className='movie-poster' src={this.props.poster} alt='movie poster'/>
                {this.props.title}
                ({this.props.year})
                {this.props.nominated 
                ? 
                <button name='remove'
                onClick={ this.handleClick }
                >
                Remove
                </button>
                :<button 
                className='nominate-button' 
                name='nominate' 
                onClick={ this.handleClick }
                disabled={ this.props.nominated && !this.props.nominated.find(this.props.movie.imdbID === this.props.nominated.imdbID) ? true : false }
                >
                Nominate
                </button>
                }

            </div>
        )
    }
}
