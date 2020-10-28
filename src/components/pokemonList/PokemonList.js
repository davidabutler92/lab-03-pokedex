import React from 'react';
import './PokemonList.css';
import PokemonItem from '../pokemonItem/PokemonItem';

export default function PokemonList({ pokemonData }) {
const pokemonList = pokemonData.map(pokemon => {
    return (
        <li key={pokemon.name} className='listItem'>
            <PokemonItem
                name={pokemon.name}
                image={pokemon.image}
                type={pokemon.type}
                hp={pokemon.hp}
            />
        </li>
    )
})
    return (
        <ul className='pokemonList'>
            {pokemonList}
        </ul>
    )
}
