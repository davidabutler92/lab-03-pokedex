import React, { Component } from 'react'
import pokemonData from '../../data';
import PokemonList from '../../components/pokemonList/PokemonList';
import Header from '../header/Header';
import searchFilter from './search-filter';
import './PokemonContainer.css';

export default class PokemonConainer extends Component {
    //initial state
    state = {
        textField: '',
        pokemonData: []
    }
    //user input
    handleInputChange = event => {
        //when user types in input field it updates textfield state
        this.setState({ textField: event.target.value });
    }

    //prevents page from refreshing on submit
    handleSubmit = event => {
        event.preventDefault();
        const filteredPokemon = searchFilter(this.state.textField, pokemonData)
        if(this.state.textField === '') {
            this.setState({ pokemonData: pokemonData })
        } else {
            this.setState({ pokemonData: filteredPokemon })
        }
    }

    componentDidMount() {
        // when app first loads it will set Pokemon data state to all the pokemonData
        this.setState({ pokemonData: pokemonData })
    }

    render() {
        return (
        <section className='section'>
            <Header 
                handleSubmit={this.handleSubmit}
                value={this.state.textField} 
                handleInputChange={this.handleInputChange}
            />
            <PokemonList pokemonData={this.state.pokemonData}/>
        </section>
        )
    }
}