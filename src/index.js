import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import '../assets/font/raleway.css';
import '../assets/css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
const store = createStore(myReducer,applyMiddleware(thunk));

const routes = (
    <Provider store={ store }>
        <HashRouter>
            <Route path="/" component={App} />
        </HashRouter>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA