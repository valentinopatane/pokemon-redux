import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import StarButton from "../StarButton/StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../actions";
const PokeCard = ({ poke }) => {
    const dispatch = useDispatch();
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const pokeTypes = poke.types.map((t) => t.type);
    const typeNames = pokeTypes.map((t) => capitalize(t.name)).join(" - ");

    const handleClick = () => {
        dispatch(setFavorite({ pokeId: poke.id }));
    };
    return (
        <Card
            title={capitalize(poke.name)}
            cover={<img src={poke.sprites.front_default} alt={poke.name}></img>}
            extra={
                <StarButton isFavorite={poke.favorite} onClick={handleClick} />
            }
        >
            <Meta description={typeNames} />
        </Card>
    );
};

export default PokeCard;
