import request from 'superagent';
import { PER_PAGE } from '../constants';

export const getAllPokemon = () => {
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=${PER_PAGE}`)
        .then(res => {
            if(!res.ok) throw new Error();
            return res.body;
        })
        .then(res => {
            return res;
        })
}

export const getPokemon = (properties) => {
    console.log(properties)
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${properties?.name}&type_1=${properties?.type}&perPage=${PER_PAGE}&page=${properties?.page}`)
        .then(res => {
            if(!res.ok) throw new Error();
            return res.body;
        })
}

export const getPokemonById = id => {
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${id}`)
        .then(res => {
            if(!res.ok) throw new Error();
            return res.body;
        })
}




