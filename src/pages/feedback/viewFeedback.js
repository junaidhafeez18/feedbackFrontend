import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFeedback } from '../../actions/actions';

const FetchFeedback = () => {
    const dispatch = useDispatch();
    const feedbackData = useSelector(state => state.feedback.data);

    console.log(feedbackData);
    
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchFeedback()); // Dispatch the fetchFeedback action when the component mounts
        };
        fetchData();
    }, [dispatch]); // Include dispatch in the dependency array to ensure the effect runs when dispatch changes

    return (
        <>
            <table id="example" className="table table-striped" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Participate By</th>
                        <th>Joining</th>
                        <th>Message</th>
                        <th>Suggestions</th>
                    </tr>
                </thead>
                <tbody>
                {feedbackData && Array.isArray(feedbackData.data.data) ? (
                    feedbackData.data.data.map(entry => (
                        <tr key={entry.id}>
                            <td>{entry.fname} {entry.lname}</td>
                            <td>{entry.email}</td>
                            <td>{entry.joinby}</td>
                            <td>{entry.participate}</td>
                            <td>{entry.message}</td>
                            <td>{entry.suggest}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">No feedback data available</td>
                    </tr>
                )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Participate By</th>
                        <th>Joining</th>
                        <th>Message</th>
                        <th>Suggestions</th>
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <Link to="/home">
                <button className="surveyBtn" type="button">Back Home</button>
            </Link>
        </>
    );
};

export default FetchFeedback;
