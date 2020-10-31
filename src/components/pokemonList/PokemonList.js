import React from 'react';
import './PokemonList.css';
import PokemonItem from '../pokemonItem/PokemonItem';
import { Link } from 'react-router-dom';
import PagingButton from '../paging-button/PagingButton';

export default function PokemonList({ pokemonData, handlePaging, count, page }) {
const pokemonList = pokemonData.map(pokemon => {
    return (
        <Link className='cardLink' to='/detail'>
            <li key={pokemon._id} className='listItem'>
                <PokemonItem
                    name={pokemon.pokemon}
                    image={pokemon.url_image}
                    type={pokemon.type_1}
                    hp={pokemon.hp}
                />
            </li>
        </Link>
    )
})
    return (
        <>
        <PagingButton 
        count={count}
        handlePaging={handlePaging.prev}
        page={page}
        increment={-1}
        />
        <PagingButton 
        count={count}
        handlePaging={handlePaging.next}
        page={page}
        increment={1}
        />
        <ul className='pokemonList'>
            {pokemonList}
        </ul>
        </>
    )
}
