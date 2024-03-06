import React from 'react';
import { logoutUser } from '../../actions/actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user_data, logoutUser }) => {

    // variable to navigate the page after action perform
    let navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const status = await logoutUser(); // Dispatch the logout action
            if (status) {
                localStorage.removeItem("user-info");
                navigate("/");
            } else {
                // Handle unexpected role
            }
            // Handle navigation or UI updates after logout
        } catch (error) {
            // Handle logout error
            console.error('Logout error:', error);
        }
    };

    return (
        <>
            <header className="nav">
                {/* logo */}
                <div className="logo">
                    <img src="assets/images/logo.png" alt="Logo" />
                </div>
                <ul className="pageList">
                    <li>{user_data.email}</li>
                    <a className='m-l-10'>
                        <button className="surveyBtn m-0" type="button" onClick={handleLogout}>Logout</button>
                    </a>
                </ul>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    user_data: JSON.parse(localStorage.getItem("user-info")),
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
