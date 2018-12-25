import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import 'font-awesome/css/font-awesome.min.css';
import '../assets/font/raleway.css';
import '../assets/css/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'owl.carousel2/dist/assets/owl.carousel.css';
import 'jquery';
import 'owl.carousel';
import 'webpack-jquery-ui';
import 'bootstrap/dist/js/bootstrap.min';
import '../assets/js/global-custom';

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