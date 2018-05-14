// src/js/components/List.jsx

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addMovie, filterMovies} from '../actions/index';

const mapDispatchToProps = (dispatch, ownProps) => ({
    purpose: ownProps.purpose,
    buttonText: ownProps.buttonText,
    addMovie: (movie) => dispatch(addMovie(movie)),
    filterMovies: (criterion, value) => dispatch(filterMovies(criterion, value))
});

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            inputString: '',
            timeoutID: null
        };

    }

    handleClick(inputString){
        if (this.props.purpose === 'filter') {
            this.props.filterMovies('title',inputString);
        } else if (this.props.purpose === 'add') {
            this.props.addMovie({title: inputString});
        }
        this.setState({inputString: ''});
    }

    handleChange(inputString) {
        this.setState({
            inputString: inputString
        });
        console.log(inputString)
        if (this.props.purpose === 'filter') {
            (this.state.timeoutID) && (clearTimeout(this.state.timeoutID));
            this.setState({
                timeoutID: setTimeout(this.handleClick.bind(this,inputString), 2000)
            });
        }
    }

    render(){
        return (
            <fieldset>
                <input name="movieTitle" type="text" placeholder="Search..." value={this.state.inputString} onChange={(event) => this.handleChange.call(this,event.target.value)} />
                <button className={`${this.props.purpose} btn`} 
                onClick={(event) => {
                    event.preventDefault();
                    this.handleClick.call(this, this.state.inputString);
                }} >
                    {this.props.buttonText}
                </button>
            </fieldset>
        );
    }
};

const ConnectedSearch = connect(null,mapDispatchToProps)(Search)


export default ConnectedSearch;