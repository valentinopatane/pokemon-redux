import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "./api";
import { setPokemons } from "./actions";

import Searcher from "./components/Searcher/Searcher";
import PokeList from "./components/PokeList/PokeList";
import PokeCard from "./components/PokeCard/PokeCard";

import { Col } from "antd";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
    const pokemons = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPokemons = async () => {
            const pokes = await getPokemons();
            dispatch(setPokemons(pokes));
        };

        fetchPokemons();
    }, []);
    return (
        <div className="App">
            <Col span={4} offset={10}>
                <img src={logo} alt="pokedux"></img>
            </Col>
            <Col span={8} offset={8}>
                <Searcher />
            </Col>
            <PokeList>
                {pokemons.map((p, i) => (
                    <PokeCard poke={p} key={i} />
                ))}
            </PokeList>
        </div>
    );
}

export default App;
