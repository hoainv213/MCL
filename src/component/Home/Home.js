import React, {Component} from 'react';
import Bg_banner from '../Layout/Bg_banner';
import ItemCurrentProject from './ItemCurrentProject';
import ProjectLinkItem from './projectLinkItem';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';
import { fetchLinkSection } from "../../actions/index";
import Loading from './../../loading';

class Home extends Component{

    componentWillMount(){
        this.props.fetchAll();
    }

    render () {
        let { linkSection } = this.props;
        if (linkSection.length === 0) {
            return(
                <Loading/>
            )
        }
        return (
            <div className="home">
                <Bg_banner />
                <div className="container">
                    <div className="project-link">
                        <div className="container-fluids">
                            <div className="p-relative directorOurProperties padding-top-40">
                                {
                                linkSection.map((value,index)=>{
                                    return (
                                        <ProjectLinkItem
                                            key     = { index }
                                            links   = {value}
                                            check_  = {index+1}
                                        />
                                    );
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        linkSection: state.linkSection

    }
};
const mapDispathToProps = (dispatch, props) =>{
    return{
        fetchAll : () =>{
            dispatch(fetchLinkSection());
        },

    }
};
export default connect(mapStateToProps,mapDispathToProps)(Home);