import React from 'react';
import parse from "html-react-parser";
import aboutData from "../../../data/About/home-two";
import '../../About/home-two/about.css';




const About = () => {
    return (
        <div className="home-two-about-area" >
            
                <div className="row align-items-center-about-area">
                    <div className="col-lg-6 override" >
                        <div className="about-content about-content--2">
                            
                            <h1>It's never been easier to incorporate in India!</h1>
                            <h5>Start your business from anywhere in one simple dashboard.</h5>
                            
                            {/* <Link to={`${process.env.PUBLIC_URL + aboutData.btnLink}`} className="btn-about">{aboutData.btnText} <i className="fa fa-angle-double-right"/></Link> */}
                        </div>
                    </div>
                </div>
                <div className="content__hero_video-wrap-about-wrap">
                    <video className="myVideo"
                        src='https://bigbuddy-store.s3.us-west-2.amazonaws.com/legalniti1.mov' autoPlay muted loop />
                </div>

            
        </div>
    );
};

export default About;
