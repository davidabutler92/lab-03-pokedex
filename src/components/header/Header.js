import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import SearchForm from '../searchForm/SearchForm';

export default function Header({ handleInputChange, value, handleSubmit}) {
    return (
        <div className='div'>
            <Link className='underlineNone' to='/'>
                <h1 className='h1'>Pokédex</h1>
            </Link>
            <SearchForm 
                handleInputChange={handleInputChange}
                value={value}
                handleSubmit={handleSubmit}
            />
        </div>
        
    )
}
