import React, { Component } from "react";
import PokemonList from "../../components/pokemonList/PokemonList";
import Header from "../header/Header";
import { getPokemon, getAllPokemon } from "../../services/pokemonApi";
import "./PokemonContainer.css";

export default class PokemonConainer extends Component {
  //initial state
  state = {
    name: "",
    pokemonData: [],
    type: "",
    page: 1,
    count: 0,
    loading: false
  };

  //user input
  handleNameChange = (event) => {
    //when user types in input field it updates textfield state
    this.setState({ name: event.target.value });
  };

  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
  };

  setPokemonState = (apiData) => {
    this.setState({ pokemonData: apiData.results, count: apiData.count, loading: false });
  };

  //prevents page from refreshing on submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    getPokemon({ name: this.state.name, type: this.state.type }).then((res) => {
      this.setPokemonState(res);
    });
  };

  handleNextPage = () => {
    this.setState({ page: this.state.page + 1, loading: true }, () => {
        getPokemon({
          name: this.state.name,
          type: this.state.type,
          page: this.state.page,
        }).then((res) => this.setPokemonState(res));
    });
  };

  handlePrevPage = () => {
    this.setState({ page: this.state.page - 1, loading: true }, () => {
        getPokemon({
          name: this.state.name,
          type: this.state.type,
          page: this.state.page,
        }).then((res) => this.setPokemonState(res));
    });
  };

  componentDidMount() {
    // when app first loads it will set Pokemon data state to all the pokemonData
    getAllPokemon().then((res) => this.setPokemonState(res));
  }

  render() {
    if(this.state.loading) return (
        <section className="section">
            <Header
            handleSubmit={this.handleSubmit}
            formValues={{ name: this.state.name, type: this.state.type }}
            handleNameChange={this.handleNameChange}
            handleTypeChange={this.handleTypeChange}
            />
            <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif'/>
        </section>
        
    )

    return (
        <section className="section">
            <Header
            handleSubmit={this.handleSubmit}
            formValues={{ name: this.state.name, type: this.state.type }}
            handleNameChange={this.handleNameChange}
            handleTypeChange={this.handleTypeChange}
            />
            <PokemonList pokemonData={this.state.pokemonData} handlePaging={{ next: this.handleNextPage, prev: this.handlePrevPage }} count={this.state.count} page={this.state.page}/>
        </section>
    );
  }
}
