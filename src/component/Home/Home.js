import React, {Component} from 'react';
import Bg_banner from '../Bg_banner';
import ItemCurrentProject from './ItemCurrentProject';
import ProjectLinkItem from './projectLinkItem';
import ScrollAnimation from 'react-animate-on-scroll';
import projectsCurrent from './../../reducers/projectsCurrent';
import { connect } from 'react-redux';


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [],
            links: []
        }
    }

    componentDidMount(){
        this.setState({
            // projects: response.data.data
        })
    }

    render () {
        console.log(this.props.projects);
        var {projects,links} = this.state;
        return (
            <div className="home">
                <Bg_banner />
                <div className="container">
                    <ScrollAnimation duration={1} animateOnce={true} animateIn="ehat">
                        <div id="current-project-mb" className="current-project-mb">
                            <div className="main_cotain_cr__">
                                <h3 className="title__ text-center letter-spacing-2 clear-margin color-white">
                                    <span>CURRENT LAUNCHES</span>
                                </h3>
                                <div className="content-accordion-mb">
                                    <div className="row clear-margin">
                                        {this.showCurrentProjects(projects)}
                                    </div>
                                    <div className="display-none">
                                        <div className="text-center"><i className="color-white fa fa-angle-up"/></div>
                                        <h4 className="title-accordion text-center letter-spacing-2 clear-margin color-white collapse-eh hiser">
                                            COLLAPSE
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className="project-link">
                        <div className="container-fluids">
                            <div className="p-relative directorOurProperties padding-top-40">
                                {
                                links.map((value,index)=>{
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

    showCurrentProjects = (projects) => {
        var result = null;
        if(projects.length > 0){
            result = projects.map((value , index) =>{
                return (
                    <ItemCurrentProject
                        key={index}
                        project={value}
                    />
                )
            });
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
};
export default connect(mapStateToProps,null)(Home);