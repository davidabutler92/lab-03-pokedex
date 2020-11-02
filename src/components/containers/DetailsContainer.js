import React, { Component } from 'react'
import { getPokemonById } from '../../services/pokemonApi'
import DetailsPage from '../detailPage/DetailsPage'

export default class DetailsContainer extends Component {
    state = {
        pokemon: []
    }

    componentDidMount() {
        getPokemonById(this.props.match.params.id)
            .then(res => this.setState({ pokemon: res }))
    }

    render() {
        return (  
            <DetailsPage pokemon={this.state.pokemon}/>
        )
    }
}
