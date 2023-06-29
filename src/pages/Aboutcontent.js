import React from 'react';
import parse from "html-react-parser";
import aboutData from "../data/About/home-two.json";
import "../"
const AboutContent = () => {
    return (
        <div className='aboutcontent'>
            <div className="aboutcontent-heading ">
                <h2>{parse(aboutData.heading)}</h2>
                <div className='aboutcontent-para'>
                    <p>{parse(aboutData.text)}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;