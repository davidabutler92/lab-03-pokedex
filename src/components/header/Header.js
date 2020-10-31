import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import SearchForm from '../searchForm/SearchForm';

export default function Header({ handleNameChange, handleTypeChange, formValues, handleSubmit}) {
    return (
        <div className='div'>
            <Link className='underlineNone' to='/'>
                <h1 className='h1'>Pokédex</h1>
            </Link>
            <SearchForm 
                handleNameChange={handleNameChange}
                formValues={formValues}
                handleSubmit={handleSubmit}
                handleTypeChange={handleTypeChange}
            />
        </div>
        
    )
}