import React from 'react';
import { Link } from "react-router-dom";

export default function Thankyou() {

    return (
        <>
            <div className="thankyouInner">
                <span className="highlight" id="typewrite2"></span>
                <div className="thankyouHeading">
                    Thank you for Feedback
                </div>
                <div className="socialMedia">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <Link to="/home">
                    <button className="surveyBtn" type="button">Back Home</button>
                </Link>
                <Link to="/viewFeedback">
                    <button className="surveyBtn" type="button">View Feedback</button>
                </Link>
            </div>
            <div className="shape-X">
                <div className="X-1">
                    <img className="leftMove" src="assets/images/thankyou/shapeXImg.png" alt="Shapes" />
                </div>
                <div className="X-2">
                    <img className="rightMove" src="assets/images/thankyou/shapeXImg.png" alt="Shapes" />
                </div>
            </div>
        </>
    );
}