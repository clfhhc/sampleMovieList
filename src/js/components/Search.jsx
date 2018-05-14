// src/js/components/List.jsx

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addMovie, filterMovies} from '../actions/index';

const mapDispatchToProps = (dispatch, ownProps) => ({
    purpose: ownProps.purpose,
    buttonText: ownProps.buttonText,
    addMovie: (movie) => dispatch(addMovie(movie)),
    filterMovies: (filterCallback) => dispatch(filterMovies(filterCallback))
});

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputString: '',
            timeoutID: null
        };

    }

    performBasedOnPurpose(inputString){
        if (this.props.purpose === 'filter') {
            let regExp = new RegExp(inputString,'i')
            const filterCallback = (movie) => regExp.test(movie.title);
            this.props.filterMovies(filterCallback);
        } else if (this.props.purpose === 'add') {
            this.props.addMovie({title: inputString});
        }
    }

    handleClick(event){
        event.preventDefault();
        this.performBasedOnPurpose(this.state.inputString);
    }

    handleChange(event) {
        this.setState({
            inputString: event.target.value
        });
        if (this.props.purpose === 'filter') {
            (this.state.timeoutID) && (clearTimeout(this.state.timeoutID));
            this.setState({
                timeoutID: setTimeout(this.performBasedOnPurpose.bind(this,event.target.value), 100)
            });
        }
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            this.performBasedOnPurpose(this.state.inputString);
            if (this.props.purpose === 'filter') {
                (this.state.timeoutID) && (clearTimeout(this.state.timeoutID));
            }
        }
    }

    render(){
        return (
            <form>
                <input name="movieTitle" 
                type="text" 
                placeholder="Search..." 
                value={this.state.inputString} 
                onChange={this.handleChange.bind(this)} 
                onKeyPress={this.handleKeyPress.bind(this)}/>
                <button className={`${this.props.purpose} btn`} onClick={this.handleClick.bind(this)} >
                    {this.props.buttonText}
                </button>
            </form>
        );
    }
};

const ConnectedSearch = connect(null,mapDispatchToProps)(Search)


export default ConnectedSearch;