import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
        <section className='section'>
            <div className='homeDiv'>
                <h1 className='title'>Pokédex</h1>
                <Link className='link' to='/search'><button className='button'>Search</button></Link>
            </div>
            <div className='smallTitle'>
                <p>First gen Pokémon</p>
            </div>
        </section>
        </>
    )
}
