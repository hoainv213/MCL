import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render() {
        return (
            <div className="footer">
                    <footer className="container-fluid padding-bottom-40 padding-top-30 info-footer">
                        <div className="list-info-footer">
                            <div className="col-footer">
                                <div className="entry-footer">
                                    <h5 className="text-uppercase">Home</h5>
                                    <div className="sub-footer">

                                    </div>
                                </div>
                            </div>
                            <div className="col-footer">
                                <div className="entry-footer">
                                    <h5 className="text-uppercase">ABOUT US</h5>
                                    <div className="sub-footer">
                                        <h5><Link className="a-animation" to="/about">About 1</Link></h5>
                                        <h5><Link className="a-animation" to="/about">About 2</Link></h5>
                                        <h5><Link className="a-animation" to="/">About 3</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-footer">
                                <div className="entry-footer">
                                    <h5 className="text-uppercase">CONTACT</h5>
                                    <div className="sub-footer">

                                    </div>
                                </div>
                            </div>
                            <div className="col-footer">
                                <div className="entry-footer">
                                    <h5 className="text-uppercase">OUR MASTERPIECES</h5>
                                    <div className="sub-footer">

                                    </div>
                                </div>
                            </div>
                            <div className="col-footer">
                                <div className="entry-footer">
                                    <h5 className="text-uppercase">OUR CUSTOMERS</h5>
                                    <div className="sub-footer">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
            </div>
        );
    }
}
export default Footer;