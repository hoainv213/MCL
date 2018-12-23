import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ItemCurrentProject extends Component{

    render () {
        var {project} = this.props;
        return (
            <div className="col-6 col-lg-6 mwc__">
                <div className="overflow-hidden">
                    <img className="mb-ytr img-responsive delay-animation-mcl hover-zoom"
                         src={project.image}/>
                </div>
                <div className="entries_ce__ color-white">
                    <h5 className="type_name__ font-size-16">{project.tunure}</h5>
                    <Link className="a-animation" to="#"><h5 className="limit-text-1 current_title">{project.name}</h5></Link>
                    <Link className="find_more__" to="#"><button type="button" className="btn-transparent">FIND OUT MORE</button></Link>
                </div>
            </div>
        );
    }
}
export default ItemCurrentProject;