import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import {connect} from 'react-redux';
import {fetchMenu} from "./actions/index";
import Home from './component/Home/Home';
import About from './component/About/About';
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
                    <Route
                        key={index}
                        path={value.url}
                        exact={true}
                        component={this.attachComponent(value.title)}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };

    attachComponent = (title) => {
        switch (title) {
            case 'Home':
                return Home;
            case 'About us':
                return About;
            case 'OUR MASTERPIECES':
                return NotFound;
            default:
                return NotFound;
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
