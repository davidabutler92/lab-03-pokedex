import React from 'react'
import pokeball from '../../assets/pokeball.png';
import { Link } from 'react-router-dom';

export default function DetailsPage() {
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
        </>
    )
}
