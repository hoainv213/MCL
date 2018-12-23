import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from './../assets/images/logo.png';
import ScrollAnimation from "react-animate-on-scroll";

class Header extends Component{
    render() {
        return (
            <div id="page-header">
                <div className="contain_menu__">
                    <header id="masthead" className="site-header container" role="banner">
                        <div className="site-branding  site-branding--image logo p-relative">
                            <Link to={'/'}><img className="main-logo logo" alt="Home" src={Logo}/></Link>
                        </div>
                        <div className="main-menu p-relative">
                            <ul id="menu__">
                                <li className="item_menu__"><Link className="a-animation" to={'/'}>Home</Link>
                                </li>

                                <li className="item_menu__"><Link className="a-animation" to={'about'}>About</Link>
                                </li>
                                <li className="item_menu__"><Link className="a-animation"
                                                                  to={'products'}>Products</Link></li>
                                <li className="item_menu__"><Link className="a-animation" to={'contact'}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </header>
                </div>
                    <div className="scrolldownicon">
                        <ScrollAnimation duration={1.2} animateIn="fadeIn" >
                        <div className="mouse">
                            <div className="wheel">
                            </div>
                        </div>
                        <div>
                            <span className="mwheel1 mwheel"/>
                            <span className="mwheel2 mwheel"/>
                            <span className="mwheel3 mwheel"/>
                        </div>
                        </ScrollAnimation>
                    </div>
            </div>
        );
    }
}
export default Header;