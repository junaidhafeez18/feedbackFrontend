import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitFeedback } from '../../actions/actions';
import { useNavigate } from 'react-router-dom';

const Feedback = ({ submitFeedback }) => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [participate, setParticipate] = useState('');
  const [join, setJoin] = useState('');
  const [message, setMessage] = useState('');
  const [suggest, setSuggest] = useState('');

//   // variable to navigate the page after action perform
  let navigate = useNavigate()

  const handleSubmit = async () => {
      try {
          const status = await submitFeedback(fname, lname, participate, join, message, suggest);
          if (status) {
              navigate("/thankyou");
          } else {
              // Handle unexpected role
          }
      } catch (error) {
          // Handle Submit error
      }
  };

  return (
    <>
      <div className="survey-inner">
        <div className="row">
            <div className="col-md-5 lap-none">
                <div className="row">

                    {/* shapes */}
                    <div className="col-md-8 mt-5 pt-5">
                        <div className="shape-D roll-right">
                            <div className="shape-inner lightRollLeft">
                                <img src="assets/images/surveyForm/shapeImg/shape_1.jpg" alt="shape" />
                            </div>
                        </div>
                        <div className="shape-D small roll-right">
                            <div className="shape-inner lightRollLeft">
                                <div className="playBtn">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                                <img src="assets/images/surveyForm/shapeImg/shape_2.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pe-0">
                        <div className="shape-D small reverse roll-left">
                            <div className="shape-inner  lightRollRight">
                                <img src="assets/images/surveyForm/shapeImg/shape_3.jpg" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7 lap-100">
                <div className="surveyForm_inner">
                    <span className="highlight" id="typewrite2"></span>
                    <h2 className="subHeading">Event evaluation </h2>

                    {/* form */}
                    <form method="post">
                        <div className="row">
                            <div className="col-md-6">

                                {/* fields start */}
                                <div className="inputField">
                                    <label for="name" className="inputLabel">first name*</label>
                                    <input type="text" name="f-name" id="fs-name" value={fname} onChange={(e) => setFName(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inputField">
                                    <label for="name" className="inputLabel">last name*</label>
                                    <input type="text" name="l-name" id="l-name" value={lname} onChange={(e) => setLName(e.target.value)} required />
                                </div>
                            </div>
                        </div>

                        <div className="inputField">
                            <label className="inputLabel" for="participate">how did you participate*</label>
                            <select name="participate" id="participate" value={participate} onChange={(e) => setParticipate(e.target.value)} required>
                                <option value="">- Select</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Advertisment">Advertisment</option>
                                <option value="Google Search">Google Search</option>
                            </select>
                            <span></span>
                        </div>

                        {/* radio buttons */}
                        <div className="inputField">
                            <label className="inputLabel">Will you join us next year?</label>
                            <div className="radioField">
                                <input type="radio" name="join" value="yes" onChange={(e) => setJoin(e.target.value)} />
                                <label>yes</label>
                            </div>
                            <div className="radioField">
                                <input type="radio" name="join" value="Maybe" onChange={(e) => setJoin(e.target.value)} />
                                <label>Maybe</label>
                            </div>
                            <div className="radioField">
                                <input type="radio" name="join" value="No" onChange={(e) => setJoin(e.target.value)} />
                                <label>No</label>
                            </div>
                        </div>

                        <div className="inputField">
                            <label for="message" className="inputLabel">Will you join us next year?*</label>
                            <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>
                        
                        <div className="inputField">
                            <label for="suggest" className="inputLabel">Suggest Improvements*</label>
                            <textarea name="suggest" id="suggest" value={suggest} onChange={(e) => setSuggest(e.target.value)} required></textarea>
                        </div>

                        {/* To tahnkyou button */}
                        <button id="sub" className="surveyBtn" type="button">
                            <input type="reset" value="Submit Feedback Survey" style={{background: 'none'}} onClick={handleSubmit} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
    submitFeedback: (fname, lname, participate, join, message, suggest) => dispatch(submitFeedback(fname, lname, participate, join, message, suggest)),
});

export default connect(null, mapDispatchToProps)(Feedback);
