import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import {connect} from 'react-redux';
import {fetchMenu} from "./actions/index";
import Home from './component/Home/Home';
import About from './component/About/About';
import Masterpieces from './component/OurMasterpieces/ourMasterpieces';
import NotFound from './NotFound';


class App extends Component {

    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        let {menu} = this.props;
        return (

            <div id="page-inner">
                <Header/>
                <div id="content">
                    {this.showContentMenus(menu)}
                </div>
                <Footer/>
            </div>
        );
    }

    showContentMenus = (menu) => {
        let result = null;
        if (menu.length > 0) {
            result = menu.map((value, index) => {
                return (
                    this.attachComponent(index,value.url,value.title)
                );
            });
        }
        return <Switch>{result}</Switch>;
    };

    attachComponent = (key,path,component) => {
        switch (component) {
            case 'Home':
                return (
                    <Route
                        key={key}
                        path={path}
                        exact={true}
                        component={Home}
                    />
                );
            case 'About us':
                return (
                    <Route
                        key={key}
                        path={path}
                        exact={true}
                        component={About}
                    />
                );
            case 'OUR MASTERPIECES':
                return (
                    <Route
                        key={key}
                        path={path}
                        exact={true}
                        component={Masterpieces}
                    />
                );
            default:
                return (
                    <Route
                        key={key}
                        path="*"
                        exact={false}
                        component={NotFound}
                    />
                );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchMenu: () => {
            dispatch(fetchMenu());
        },

    }
};
export default connect(mapStateToProps, mapDispathToProps)(App);
