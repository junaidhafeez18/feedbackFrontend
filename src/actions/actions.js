export const loginUser = (email, password) => async (dispatch) => {
    try {
        const credentials = { email, password };
        const response = await fetch('http://localhost/myTaskBackend/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const result = await response.json();

        if (result.status === true && result.login_status === "Active") {
            localStorage.setItem("user-info", JSON.stringify(result));
            return result.role; // Return the role directly
        } else {
            alert(result.message + ", Invalid email or password!!");
            // Handle other scenarios if needed
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const logoutUser = (authentication) => async (dispatch) => {
    try {
        const user_data = JSON.parse(localStorage.getItem("user-info"));
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + user_data.access_token);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch('http://localhost/myTaskBackend/api/logout', requestOptions);
        const result = await response.json();

        if (result.status === true) {
            alert(result.message);

            // Dispatch an action indicating successful logout if needed
            dispatch({ type: 'LOGOUT_SUCCESS' });
            
            return result;
        } else {
            // Handle other scenarios if needed
        }
    } catch (error) {
        // Handle logout error
        dispatch({ type: 'LOGOUT_ERROR', payload: error.message });
    }
};


export const submitFeedback = (fname, lname, participate, join, message, suggest) => async (dispatch) => {
    try {
        const user_data = JSON.parse(localStorage.getItem("user-info"))
        const userToken = user_data.access_token
        const formData = new FormData();
        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("participate", participate);
        formData.append("join", join);
        formData.append("message", message);
        formData.append("suggest", suggest);

        const requestOptions = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${userToken}`,
            },
            body: formData,
        };

        const response = await fetch("http://localhost/myTaskBackend/api/create-feedback", requestOptions);
        const result = await response.json();

        // Handle the response from the backend if needed
        if (result.status === true) {
            // Dispatch an action if submission was successful
            dispatch({ type: 'SUBMIT_FEEDBACK_SUCCESS' });
            return result; // Return the role directly
        } else {
            alert((result.fname) ? "FIRST NAME IS REQUIRED \n" : (result.lname) ? "LAST NAME IS REQUIRED \n" :  (result.participate) ? "HOW DID YOU PARTICIPATE IS REQUIRED \n" :  (result.message) ? "WILL YOU JOIN US NEXT YEAR IS REQUIRED \n" :  (result.suggest) ? "SUGGEST IMPROVEMENTS IS REQUIRED" : '');
            
            // Handle other scenarios if needed
            // return 'Failed';
        }
    } catch (error) {
        // Dispatch an action if an error occurred during submission
        dispatch({ type: 'SUBMIT_FEEDBACK_ERROR', payload: error.message });
    }
};

export const fetchFeedback = () => async (dispatch, getState) => {
    try {
      const user_data = JSON.parse(localStorage.getItem("user-info"))
      const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${user_data.access_token}`,
        },
        url: 'http://localhost/myTaskBackend/api/get-feedback',
      };
  
      dispatch({ type: 'FETCH_FEEDBACK_REQUEST' });
  
      const response = await fetch(config.url, config);
      const data = await response.json();
  
      dispatch({ type: 'FETCH_FEEDBACK_SUCCESS', payload: data });

      return data;
    } catch (error) {
      dispatch({ type: 'FETCH_FEEDBACK_FAILURE', payload: error.message });
    }
  };
  