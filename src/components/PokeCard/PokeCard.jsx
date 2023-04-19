import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
const PokeCard = ({ poke }) => {
    const pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
    return (
        <Card
            title={pokeName}
            cover={<img src={poke.url} alt={poke.name}></img>}
            extra={<StarOutlined />}
        >
            <Meta description="fire" />
        </Card>
    );
};

export default PokeCard;
