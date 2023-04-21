import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../constants";

const initialState = {
    pokemons: [],
    loading: false,
};
export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, pokemons: action.payload };
        case SET_FAVORITE:
            const newPokeList = [...state.pokemons];
            const currentPokeIndex = newPokeList.findIndex(
                (p) => p.id === action.payload.pokeId
            );
            if (currentPokeIndex < 0) {
                return state;
            } else {
                newPokeList[currentPokeIndex].favorite =
                    !newPokeList[currentPokeIndex].favorite;
                return { ...state, pokemons: newPokeList };
            }
        case SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};
