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

        this.setState({ disable: !this.state.disable});
    }
    
    render() {
        console.log(this.props.nominated)
        return (
            <div className='movie-card-result'>
                <img className='movie-poster' src={this.props.poster} alt='movie poster'/>
                <div className='title-button' >
                    <div className='movie-info'>
                        <p>{this.props.title}</p>
                        <p>({this.props.year})</p>
                    </div>
                    {this.props.nominated 
                    ? 
                    <button 
                    className='button'
                    id='remove-button'
                    name='remove'
                    onClick={ this.handleClick }
                    >
                        Remove
                    </button>
                    :<button 
                    className='button' 
                    id='nominate-button'
                    name='nominate' 
                    onClick={ this.handleClick }
                    disabled={ this.state.disable }
                    >
                        Nominate
                    </button>
                    }
                </div>
            </div>
        )
    }
}
