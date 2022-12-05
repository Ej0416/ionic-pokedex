const baseURL = "https://pokeapi.co/api/v2";

const query = {
    pokemon: "pokemon",
};

export async function fetchSpecificPokemon(pokemon) {
    return fetch(`${baseURL}/${query.pokemon}/${pokemon}`);
}
