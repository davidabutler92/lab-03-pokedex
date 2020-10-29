import React from 'react'
import './PokemonItem.css'

export default function PokemonItem({ image, name, type, hp}) {
    return (
        <div className='pokemonDiv'>
            <div className='nameHpDiv'>
                <p className='name'>{name}</p>
                <p className="hp">HP: {hp}</p>
            </div>
            <img className='image' src={image}></img>
            <p className='type'>Type: {type}</p>
        </div>
    )
}
