import request from 'superagent';

export const getAllPokemon = () => {
    return request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=1000')
        .then(res => {
            if(!res.ok) throw 'Could not get pokemon';
            return res.body;
        })
        .then(res => {
            return res.results;
        })
}
//API call function 
export const getPokeonByName = pokemonName => {
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemonName}`)
        .then(res => {
            if(!res.ok) throw 'Could not get pokemon by name'
            return res.body;
        })
        .then(res => {
            return res.results;
        })
}