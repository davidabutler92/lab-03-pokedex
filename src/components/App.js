import React, { Component } from 'react';
import './App.css';
import PokemonItem from './pokemonItem/PokemonItem';


export default class App extends Component {

  render() {
    return (
      <PokemonItem 
        image='http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
        name='Bulbasaur'
        type='Grass'
        hp='45'
      />
    )
  }
}
