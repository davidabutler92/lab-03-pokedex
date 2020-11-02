import React from 'react'
import './App.css';
import PokemonContainer from './containers/PokemonConainer';
import HomePage from './homepage/HomePage';
import DetailsContainer from './containers/DetailsContainer'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/detail/:id' component={DetailsContainer} />
        <Route path='/search' component={PokemonContainer} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}
