import React, {Component} from 'react';
import Bg_banner from "../Bg_banner";
import image_1 from "../../../assets/images/s3.jpg";
import image_2 from "../../../assets/images/section1.jpg";
import li from "../../../assets/images/icon-left.png";
import ri from "../../../assets/images/icon-right.png";

class About extends Component{
    render() {
        return (
            <div className="about">
                <Bg_banner />
                <div className="container">
                    <div id="corporate-profile" className="row row-2-hp padding-bottom-40  padding-top-40">
                        <div className="col-12 text-center padding-bottom-15 padding-top-15">
                            <h3 className="font-nomal letter-spacing-2">CORPORATE PROFILE</h3>
                        </div>
                        <div className="col-md-6">
                            <div className="box_shadow__ padding-left-0">
                                <img className="img-responsive" src={image_1}/>
                            </div>
                        </div>
                        <div className="col-md-6 middle_content">
                            <div className="entry">
                                <p className="font-size-16">MCL Land has established a legacy of building quality homes
                                    in both Singapore and Malaysia over the last 50 years. It is a member of the Jardine
                                    Matheson Group under Hongkong Land Holdings. The Group has an extensive portfolio of
                                    prime residential properties in Singapore and Malaysia.
                                    <br/>
                                    <br/>
                                    Notable developments include The Estuary, UBER 388, Este Villa, Terrasse,
                                    Palms @ Sixth Avenue, Hallmark Residences, Ripple Bay, J Gateway, LakeVille,
                                    Sol Acres, Lake Grande and Parc Esta.
                                    <br/>
                                    <br/>
                                    As a premier and reputable property group, we are dedicated to
                                    delivering superior customer satisfaction and shareholder value
                                    growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="mission" className="row row-2-hp padding-bottom-40">
                        <div className="line_bottom__"/>
                        <div className="col-12 text-center padding-bottom-15 padding-top-15">
                            <h3 className="font-nomal letter-spacing-2">MISSION</h3>
                        </div>
                        <div className="col-md-9 center_content clear-margin">
                            <div className="entry">
                                <p className="font-size-16 font-italic text-center">
                                    To be a premier and reputable property group,
                                    dedicated to the pursuit of customer satisfaction
                                    through quality products and service excellence,
                                    and always delivered with professionalism and integrity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="history" className="row row-2-hp padding-bottom-40 clear-padding-mobile">
                        <div className="line_bottom__"/>
                        <div className="col-12 text-center padding-bottom-15 padding-top-15">
                            <h3 className="font-nomal letter-spacing-2">HISTORY: KEY MILESTONES</h3>
                        </div>
                        <div className="col-md-6 padding-top-60">
                            <div className="entry">
                                <div className="content-srrt__ row clear-margin">
                                    <img className="btn-event-view left-se__"
                                         src={li}/>
                                        <div id="drag_history" className="dragdealer drag-ehat marxe__ margin-top-30">
                                            <div className="handle red-bar font-bold ">
                                                <span className="value value-drag font-bold value">1969</span>
                                            </div>
                                        </div>
                                        <img className="btn-event-view right-se__"
                                             src={ri}/>

                                </div>
                                <span className="alert___ font-size-12"><i>Toggle buttons above to find out more about MCL Land's histoty.</i></span>
                                <p className="font-size-16 history_text padding-top-15">
                                    MCL Land has established a legacy of building quality homes in both Singapore and
                                    Malaysia over the last 50 years. It is a member of the Jardine Matheson Group under
                                    Hongkong Land Holdings. The Group has an extensive portfolio of prime residential
                                    properties in Singapore and Malaysia.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box_shadow__ padding-right-0">
                                <img className="img-responsive image_old_bw history_img"
                                     src={image_2}/>
                            </div>
                        </div>
                    </div>
                    <div id="core-values" className="row-2-hp padding-bottom-40 padding-top-15">
                        <div className="line_bottom__"/>
                        <div className="col-12 text-center padding-bottom-15 padding-top-15">
                            <h3 className="font-nomal letter-spacing-2">CORE VALUES</h3>
                        </div>
                        <div className="row padding-bottom-15 padding-top-15">
                            <div className="col-md-4">
                                <div className="entry">
                                    <h5>Service Excellence</h5>
                                    <p className="font-size-16">
                                        We take pride in everything we do, and consistently strive to create value for
                                        our customers through quality products and excellent service.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="entry">
                                    <h5>Personal Responsibility</h5>
                                    <p className="font-size-16">
                                        While we are all part of a bigger organisation, it is our duty to be responsible
                                        not just for our own job scopes, but career development as well.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="entry">
                                    <h5>
                                        Integrity & Professionalism
                                    </h5>
                                    <p className="font-size-16">
                                        We are all ambassadors of the company, so it is important for us to conduct
                                        ourselves with the highest standards of integrity and professionalism at all
                                        times.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="entry">
                                    <h5>Respect & Care</h5>
                                    <p className="font-size-16">
                                        Our respect and care for others is not just limited to our co-workers, but
                                        extends to external communities as well, because their support is integral to
                                        our success.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="entry">
                                    <h5>
                                        Innovation
                                    </h5>
                                    <p className="font-size-16">
                                        Not all roles are traditionally creative, but we strongly encourage creative
                                        thinking and problem-solving at all levels.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="entry">
                                    <h5>
                                        Teamwork
                                    </h5>
                                    <p className="font-size-16">
                                        The foundation of any successful company is a strong team. Hence, we must tap on
                                        each other’s strengths and work cohesively to take the company to new heights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;