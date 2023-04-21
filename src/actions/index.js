import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "../constants";
import { getDetailedPokemons } from "../api";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const getPokemonsWithDetails =
    (pokemons = []) =>
    async (dispatch) => {
        const pokeDetail = await Promise.all(
            pokemons.map((p) => getDetailedPokemons(p))
        );
        const pokeDetailWithFav = pokeDetail.map((p) => {
            p.favorite = false;
            return {
                ...p,
            };
        });
        dispatch(setPokemons(pokeDetailWithFav));
    };

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});
