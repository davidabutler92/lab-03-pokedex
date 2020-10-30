import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import pokeball from '../../assets/pokeball.png';


export default function HomePage() {
    return (
        <>
        <section className='section'>
            <div className='homeDiv'>
                <h1 className='title'>Pokédex</h1>
                <img className='pokeball'src={pokeball} alt='pokeball'></img>
                <Link className='link' to='/search'><button className='button'>Search</button></Link>
            </div>
            <div className='smallTitle'>
                <p>All Generations of Pokémon</p>
            </div>
        </section>
        </>
    )
}
