import React from 'react'
import './SearchForm.css';

export default function SearchForm({ handleInputChange, value, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input 
                onChange={handleInputChange} 
                value={value} 
                className='inputSearch' 
                type='text' 
                placeholder='Enter search'
            />
            <input 
                className='button' 
                type='submit'
            />
        </form>
    )
}