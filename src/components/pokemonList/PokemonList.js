import React from 'react';
import './PokemonList.css';
import PokemonItem from '../pokemonItem/PokemonItem';

export default function PokemonList({ pokemonData }) {
const pokemonList = pokemonData.map(pokemon => {
    return (
        <li key={pokemon._id} className='listItem'>
            <PokemonItem
                name={pokemon.pokemon}
                image={pokemon.url_image}
                type={pokemon.type_1}
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
