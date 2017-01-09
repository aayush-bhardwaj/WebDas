import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
//When we want to import a variable or a function from a module rather tahn an entire module use {}
//var createStore = redux.createSTore; We can avoid this now.
import {createStore} from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";
import App from "./components/App";

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
