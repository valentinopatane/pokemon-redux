import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";

import PokeList from "./components/PokeList/PokeList";
import PokeCard from "./components/PokeCard/PokeCard";

import { Col, Spin } from "antd";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
    const pokemons = useSelector((state) => state.pokemons);
    const loading = useSelector((state) => state.loading);
    const favorite = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPokemons = async () => {
            dispatch(setLoading(true));
            const pokes = await getPokemons();
            dispatch(getPokemonsWithDetails(pokes));
            dispatch(setLoading(false));
        };

        fetchPokemons();
    }, []);
    return (
        <div className="App">
            <Col span={4} offset={10} style={{ marginBottom: "40px" }}>
                <img src={logo} alt="pokedux"></img>
            </Col>
            {loading ? (
                <Col offset={12}>
                    <Spin spinning-size="large" />
                </Col>
            ) : (
                <PokeList>
                    {pokemons.map((p, i) => (
                        <PokeCard poke={p} key={i} favorite={favorite} />
                    ))}
                </PokeList>
            )}
        </div>
    );
}

export default App;
