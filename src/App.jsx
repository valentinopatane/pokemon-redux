import { useEffect, useState } from "react";
import { getPokemons } from "./api";
import Searcher from "./components/Searcher/Searcher";
import PokeList from "./components/PokeList/PokeList";
import { Col } from "antd";
import { Connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";
import PokeCard from "./components/PokeCard/PokeCard";
function App() {
    const [pok, setPok] = useState([]);
    useEffect(() => {
        const fetchPokemons = async () => {
            const pokes = await getPokemons();
            setPok(pokes);
        };

        fetchPokemons();
    }, [setPok]);
    return (
        <div className="App">
            <Col span={4} offset={10}>
                <img src={logo} alt="pokedux"></img>
            </Col>
            <Col span={8} offset={8}>
                <Searcher />
            </Col>
            <PokeList>
                {pok.map((p, i) => (
                    <PokeCard poke={p} key={i} />
                ))}
            </PokeList>
        </div>
    );
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);