import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchMenu} from "../../actions/index";

class Nav extends Component {

    componentDidMount() {
        this.props.fetchMenu()
    }

    render() {
        let {menu} = this.props;
        return (
            <div id="list-menu">
                {this.formatNav(menu)}
            </div>
        );
    }

    formatNav = (menu) => {
        let menuHtml = null;
        menuHtml = menu.map((value, index) => {
            if (value.sub_menu != null) {
                let subMenu = [...value.sub_menu];
                return (
                    <div key={index}>
                        <h3 className="item-menu item-menu-has"><span className="a-animation clear-margin">{value.title}</span></h3>
                        <div className="sub-menu">
                            {
                                subMenu.map((subMenuValue, subMenuIndex) => {
                                    return (
                                        <h4 key={subMenuIndex}>
                                            <i className="fa fa-caret-right margin-right-30 opacity-0 delay-animation-mcl5"/>
                                            <Link className="s-item-menu a-animation"
                                                  to={subMenuValue.url}>{subMenuValue.title}</Link>
                                        </h4>
                                    )
                                })
                            }
                        </div>
                    </div>
                );
            } else {
                return (
                    <h3 key={index} className="item-menu"><Link className="a-animation"
                                                                to={value.url}>{value.title}</Link></h3>
                )
            }
        })
        return menuHtml;
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }

};

const mapDispathToProps = (dispath) => {
    return {
        fetchMenu: () => {
            dispath(fetchMenu());
        }
    }
};
export default connect(mapStateToProps, mapDispathToProps)(Nav);