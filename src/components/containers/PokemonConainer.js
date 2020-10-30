import React, { Component } from 'react'
import PokemonList from '../../components/pokemonList/PokemonList';
import Header from '../header/Header';
import { getAllPokemon, getPokeonByName } from '../../services/pokemonApi';
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
        if(this.state.textField === '') {
            getAllPokemon()
            .then(res => this.setState({ pokemonData: res }));
        } else {
            getPokeonByName(this.state.textField)
                .then(res => this.setState({ pokemonData: res }))
        }
    }

    componentDidMount() {
        // when app first loads it will set Pokemon data state to all the pokemonData
        getAllPokemon()
            .then(res => this.setState({ pokemonData: res }));
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