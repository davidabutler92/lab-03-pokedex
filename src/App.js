import React, { Component } from 'react';
import data from './data.js';
import './App.css';


export default class App extends Component {

  render() {
    console.log(data);
    return (
      <div>
        <PokemonList data={data}/>
      </div>
    )
  }
}
