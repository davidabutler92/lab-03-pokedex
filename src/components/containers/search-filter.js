export default function searchFilter(name, pokemonData) {
    return pokemonData.filter(pokemon => {
        return name.toLowerCase() === pokemon.pokemon
    })
}
