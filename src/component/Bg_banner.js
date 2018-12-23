import React ,{Component} from 'react';
import bg_home from '../../assets/images/bg_home.jpg';

class Bg_banner extends Component{

    render () {
        return (
            <div id="main-background-home">
                <img alt="main-image" src={bg_home}/>
            </div>
        );
    }
}
export default Bg_banner;