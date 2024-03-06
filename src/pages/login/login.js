import React, { useState } from 'react';
import Background from './bg.jpg';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actions';
import { useNavigate } from 'react-router-dom';

const Home = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // variable to navigate the page after action perform
  let navigate = useNavigate()

  const handleLogin = async () => {
    try {
        const status = await loginUser(email, password);
        if (status === "Society" || status === "Student") {
            navigate("/home");
        } else {
            // Handle unexpected role
        }
    } catch (error) {
        // Handle login error
    }
  };

  return (
    <>
      <div className="limiter">
        <div
          className="container-login100"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">Login</span>
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Type Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>
              <div className="container-login100-form-btn m-t-19">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">
                    <input type="reset" className="login100-form-btn" value="Log In" style={{background: 'none'}} onClick={handleLogin} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(null, mapDispatchToProps)(Home);
