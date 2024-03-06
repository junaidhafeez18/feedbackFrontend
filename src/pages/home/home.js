import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <div className="survey-inner">

                {/* main heading */}
                <h1 className="mainHeading">
                    Fuel your curiosity,
                    <div className="typingEffect">
                        <span className="highlight" id="typewrite"></span>
                        <span className="typing-cursor"></span>
                    </div>
                    and discuss                      
                </h1>

                {/* about */}
                <div className="about_location">
                    <div className="aboutSingle">
                        <i className="fa-solid fa-chair"></i>
                        2500 seats
                    </div>
                    <div className="aboutSingle">
                        <i className="fa-solid fa-user"></i>
                        20 speakers
                    </div>
                    <div className="aboutSingle">
                        <i className="fa-solid fa-location-dot"></i>
                        boston, canada
                    </div>
                </div>

                {/* survey start button */}
                <Link to="/feedback">
                    <button id="takeSurvey" className="surveyBtn">Take Feedback Survey</button>
                </Link>
                <Link to="/viewFeedback">
                    <button id="takeSurvey" className="surveyBtn">View Feedback Surveys</button>
                </Link>
            </div>
        </>
    );
}