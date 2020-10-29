import React from 'react'
import './Header.css';
import SearchForm from '../searchForm/SearchForm';

export default function Header({ handleInputChange, value, handleSubmit}) {
    return (
        <div className='div'>
            <h1 className='h1'>Pokédex</h1>
            <SearchForm 
                handleInputChange={handleInputChange}
                value={value}
                handleSubmit={handleSubmit}
            />
        </div>
        
    )
}
