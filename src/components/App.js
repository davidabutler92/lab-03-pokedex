import React, { Component } from 'react';
import './App.css';
import PokemonList from './pokemonList/PokemonList';


export default class App extends Component {
  render() {
    const pokemonData = [
      {
        name: 'Bulbasaur',
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        type: 'Grass',
        hp: '45'
      },

      {
        name: 'Squirtle',
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        type: 'Water',
        hp: '55'
      },

      {
        name: 'Charmander',
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        type: 'Fire',
        hp: '35'
      },
      {
        name: 'Bulbasaur',
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        type: 'Grass',
        hp: '45'
      },

      {
        name: 'Squirtle',
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        type: 'Water',
        hp: '55'
      },

      {
        name: 'Charmander',
        image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        type: 'Fire',
        hp: '35'
      }
    ]


    return (
      <PokemonList pokemonData={pokemonData} />
    )
  }
}
