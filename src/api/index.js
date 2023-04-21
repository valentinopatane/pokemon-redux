import axios from "axios";

export const getPokemons = () => {
    return axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(({ data }) => data.results)
        .catch((e) => console.log(e));
};

export const getDetailedPokemons = (pokemon) => {
    return axios
        .get(pokemon.url)
        .then((res) => res.data)
        .catch((e) => console.log(e));
};
