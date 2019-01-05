import React ,{Component} from 'react';
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

class slugDetail extends Component{

    render () {
        return (
            <div className="quote color-black padding-bottom-30">
                <Link className="a-animation" to={'/'}><span className="text-uppercase font-nomal">Home</span></Link>
                <FontAwesomeIcon className="style-icon-slug-detail" icon={faAngleRight}/>
                <span className="text-uppercase font-bold-8">Our masterpieces</span>
            </div>
        );
    }
}
export default slugDetail;