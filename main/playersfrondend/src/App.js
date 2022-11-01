import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import About from "./components/Header/About";
//import Footer from "./components/Footer/footer";

import Profile from "./components/Profil/Profil";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Header/Home";

import Services from "./components/Header/Services";
import { useState } from "react";

// import components
//import Navbar from "./components/Navbar";
function App() {
  const [userstate, setUserState] = useState({});

  return (
    <Router>
      <Navbar />
      <Routes className="App">
        <Route
          path="/"
          element={
            userstate && userstate._id ? (
              <Profile setUserState={setUserState} username={userstate.fname} />
            ) : (
              <Login setUserState={setUserState} />
            )
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setUserState={setUserState} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="about" element={<About />} />

        <Route path="services" element={<Services />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
