import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { pokemonsReducer } from "./reducers/pokemons";
import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import { logger } from "./middlewares/index";

const composedEnhancers = compose(applyMiddleware(logger));
const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
