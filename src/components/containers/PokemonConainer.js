import React, { Component } from 'react'
import pokemonData from '../../data';
import PokemonList from '../../components/pokemonList/PokemonList';
import Header from '../header/Header';
import './PokemonContainer.css';

export default class PokemonConainer extends Component {
    render() {
        return (
        <section className='section'>
            <Header />
            <PokemonList pokemonData={pokemonData}/>
        </section>
        )
    }
}