import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Routes__ from './Routes';


class App extends Component {
    render() {
        return (
            <div id="page-inner">
                <Header/>
                <div id="content">
                    { this.showContentMenus(Routes__) }
                </div>
                <Footer/>
            </div>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((value, index) => {
                return (
                    <Route
                        key={index}
                        path={value.path}
                        exact={value.exact}
                        component={value.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }


}

export default App;
