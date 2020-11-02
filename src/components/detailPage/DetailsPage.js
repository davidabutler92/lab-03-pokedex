import React from 'react'
import pokeball from '../../assets/pokeball.png';
import { Link } from 'react-router-dom';
import './detailsPage.css';

export default function DetailsPage({ pokemon }) {
    console.log(pokemon);
    return (
        <>
            <section className='section'>
                <div className='homeDiv'>
                    <h1 className='title'>Pokédex</h1>
                    <img className='pokeball'src={pokeball} alt='pokeball'></img>
                    <Link className='link' to='/search'><button className='button'>Search</button></Link>
                </div>
                <div className='smallTitle'>
                    <p>Pokemon Details</p>
                </div>
            </section>

            <section>
                <ul className="detailsList">
                    <img className='pokemonImage'src={pokemon.url_image} alt='pokemon'></img>
                    <li className='listName'>{pokemon.pokemon}</li>
                    <div className='listDiv'>
                        <li>Type: {pokemon.type_1}</li>
                        <li>Ability: {pokemon.ability_1}</li>
                        <li>HP: {pokemon.hp}</li>
                        <li>Attack: {pokemon.attack}</li>
                        <li>Special Attack: {pokemon.special_attack}</li>
                        <li>Defense: {pokemon.defense}</li>
                        <li>Special Defense: {pokemon.special_defense}</li>
                        <li>Speed: {pokemon.speed}</li>
                    </div>
                </ul>
            </section>
        </>
    )
}
