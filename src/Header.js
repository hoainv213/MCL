import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from './../assets/images/logo.png';
import ScrollAnimation from "react-animate-on-scroll";
import Nav from './component/Layout/Nav';
import {fetchCurrentProjects} from "./actions/index";
import Slide from 'react-slick';


class Header extends Component {

    componentDidMount() {
        this.props.fetchCurrentProjects();
    }

    render() {
        let {projectsCurrent} = this.props;
        let settings = {
            arrows:         false,
            autoplay:       false,
            autoplaySpeed:  4500,
            infinite:       false,
            slidesToShow:   2,
            slidesToScroll: 1,
            rows:           1
        };
        return (
            <div id="page-header" className="feed site row clear-margin">
                <header id="masthead" className="site-header col-lg-4x clear-padding clear-margin" role="banner">
                    <div className="site-branding  site-branding--image logo p-relative">
                        <Link to={'/'}><img className="logo main-logo" src={Logo} alt="logo"/></Link>
                        <div className="angleDown"><i className="fa fa-angle-down"/></div>
                        {/*<div className="btn-on-mobile">*/}
                            {/*<button type="button" id="sidebarCollapse" className="active navbar-btn angleDown">*/}
                                {/*<span/>*/}
                                {/*<span/>*/}
                                {/*<span/>*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    </div>
                    <div className="main-menu p-relative padding-top-30">
                        <Nav/>
                    </div>
                </header>
                <div className="main-slide-des col-lg-8x clear-padding">
                    <div className="content-slide">
                        <div className="control-slide">
                            <button className="btn-control color-white">
                                <i className="fa fa-angle-double-right rotate180"/>
                            </button>
                        </div>
                        <div className="d-owl-carousel width_dw_">
                            <div className="title-silde">
                                <h4 className="letter-spacing-2">CURRENT LAUNCHES</h4>
                            </div>
                            <Slide {...settings} className="slick-main">
                                {this.showCurrentProjects(projectsCurrent)}
                            </Slide>


                        </div>
                    </div>
                </div>
                <div className="scrolldownicon">
                    <ScrollAnimation duration={1.2} animateIn="fadeIn">
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

    showCurrentProjects = (projectsCurrent) => {
        console.log(projectsCurrent);
        var result = null;
        if (projectsCurrent.length > 0) {
            result = projectsCurrent.map((value, index) => {
                return (
                    <div className="item-owlcarousel" key={index}>
                        <div className="overflow-hidden image-ob-fit">
                            <Link to={`/project/` + value.id}>
                                <img className="hover-zoom delay-animation-mcl"
                                     src={value.image}/>
                            </Link>
                        </div>
                        <div className="block-text text-center">
                            <Link className="a-animation"
                                  to={'/project/' + value.id}>
                                <h5 className="limit-text-1">{value.name}</h5></Link>
                        </div>
                    </div>
                )

            });

        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        projectsCurrent: state.projectsCurrent,

    }
};
const mapDispathToProps = (dispatch, props) => {
    return {
        fetchCurrentProjects: () => {
            dispatch(fetchCurrentProjects());
        },

    }
};
export default connect(mapStateToProps, mapDispathToProps)(Header);