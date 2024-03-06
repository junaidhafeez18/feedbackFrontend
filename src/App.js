import React from "react";
// import Counter from "./components/Counter";
// import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Feedback from "./pages/feedback/feedback";
import Thankyou from "./pages/thankyou/thankyou";
import ViewFeedback from "./pages/feedback/viewFeedback";

export default function App() {
  
  // variable for getting things from browser local storage
  const user_data = JSON.parse(localStorage.getItem("user-info"))

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <Login />
          </>
        } />
        {(() => {
          if (user_data != undefined || user_data != {}){
            return (
              <>
                <Route exact path="/home" element={
                  <>
                    <main className='survey overflow-hidden'>
                      <div className='wrapper'>
                        <Navbar />
                        <Home />
                      </div>
                    </main>
                  </>
                } />
                <Route exact path="/feedback" element={
                  <>
                    <main className="survey surveyForm overflow-hidden">
                      <div className="wrapper">
                        <Navbar />
                        <Feedback />
                      </div>
                    </main>
                  </>
                } />
                <Route exact path="/thankyou" element={
                  <>
                    <main className="survey thankyouPage overflow-hidden">
                      <div className="wrapper">
                        <Navbar />
                        <Thankyou />
                      </div>
                    </main>
                  </>
                } />
                <Route exact path="/viewFeedback" element={
                  <>
                    <main className="overflow-hidden">
                      <div className="wrapper">
                        <Navbar />
                        <ViewFeedback />
                      </div>
                    </main>
                  </>
                } />
              </>
            )
          }
          return <Login />;
        })()}
        {/*<Route exact path="/societies" element={
          <>
            <SocialNavbar />
            <Societies />
          </>
        } />
        <Route exact path="/society/:id" element={
          <>
            <SocialNavbar />
            <Society />
          </>
        } />
        <Route exact path="/chat" element={
          <>
            <SocialNavbar />
            <Chat />
          </>
        } /> */}
      </Routes>
    </Router>
  )
}
