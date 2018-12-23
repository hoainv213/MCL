import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from "react-animate-on-scroll";



class ProjectLinkItem extends Component{

    render () {
        var {links} = this.props;
        var {check_} = this.props;
        return (
            <ScrollAnimation duration={.8} animateOnce={true} animateIn="ehat">
                <div className="row row-2-hp padding-bottom-40">
                    <div className="line_bottom__"/>
                    <div className="col-12 text-center padding-bottom-15 padding-top-15">
                        <h3 className="font-nomal letter-spacing-2">{links.title}</h3>
                    </div>
                    {this.showStyleLink(check_,links)}
                </div>
            </ScrollAnimation>
        );
    }
    showStyleLink (check,links){
        var result = null;
        if( Number.isInteger(check) ){
            if(check % 2 === 0){
                return (
                    <div className="row clear-margin">
                        <div className="col-md-6 middle_content">
                            <div className="entry">
                                <p className="font-size-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <Link className="cert__ find_more__" to="#"><button type="button" className="btn-transparent">CHECK IT OUT</button></Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box_shadow__ padding-left-0">
                                <img className="img-responsive" src={links.image}/>
                            </div>
                        </div>
                    </div>
                );
            }else {
                return (
                    <div className="row clear-margin">
                        <div className="col-md-6">
                            <div className="box_shadow__ padding-left-0">
                                <img className="img-responsive" src={links.image}/>
                            </div>
                        </div>
                        <div className="col-md-6 middle_content">
                            <div className="entry">
                                <p className="font-size-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <Link className="cert__ find_more__" to="#"><button type="button" className="btn-transparent">CHECK IT OUT</button></Link>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        return result;

    }
}
export default ProjectLinkItem;