import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchMenu} from "../../actions/index";
import {  Accordion, AccordionItem } from 'react-sanfona';

class Nav extends Component {

    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        let {menu} = this.props;
        return (
            <div id="list-menu">
                <Accordion>
                    {this.formatNav(menu)}
                </Accordion>

            </div>

        );

    }

    formatNav = (menu) => {
        let menuHtml = null;
        if(menu.length > 0){
            menuHtml = menu.map((value, index) => {
                if (value.sub_menu != null) {
                    let subMenu = [...value.sub_menu];
                    return (
                        <AccordionItem
                            expanded={false}
                            key={index}
                            className="item-menu"
                            title={<span className='a-animation clear-margin'>{value.title}</span>}
                            duration={800}>
                            {
                                subMenu.map((subMenuValue, subMenuIndex) => {
                                    return (
                                        <h4 key={subMenuIndex}>
                                            <Link className="s-item-menu a-animation"
                                                  to={subMenuValue.url}>{subMenuValue.title}</Link>
                                        </h4>
                                    )
                                })
                            }
                        </AccordionItem>
                    )
                } else {
                    return (
                        <AccordionItem
                            key={index}
                            className="item-menu"
                            disabled={true}
                            title={<Link to={value.url}><span className="a-animation">{value.title}</span></Link>}/>
                    )
                }
            });
        }
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