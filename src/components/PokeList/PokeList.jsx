import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";
const PokeList = ({ children }) => {
    return <div className="PokeList">{children}</div>;
};

PokeList.defaultProps = {
    pokemons: Array(10).fill(""),
};

export default PokeList;
