import React, { Component } from 'react';
import './App.css';
import pokemonData from '../data';
import PokemonList from './pokemonList/PokemonList';


export default class App extends Component {
  render() {
    
    return (
      <PokemonList pokemonData={pokemonData} />
    )
  }
}
