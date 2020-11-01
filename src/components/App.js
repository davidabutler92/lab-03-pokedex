import React from 'react'
import './App.css';
import PokemonContainer from './containers/PokemonConainer';
import HomePage from './homepage/HomePage';
import DetailPage from './detailPage/DetailsPage';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/search' component={PokemonContainer} />
        <Route path='/detail' component={DetailPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}
