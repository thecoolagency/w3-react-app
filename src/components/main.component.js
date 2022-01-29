import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMoralis } from "react-moralis";

import Login from "./authentification/login.component";
import Home from "./public/home.component";
import Navbar from "./navbar.component";

const Main = () => {
  const { authenticate, isAuthenticated, user, logout, isAuthenticating } = useMoralis();

    return (

        <Router>
        
            <Navbar />
            
            <h1>Welcome {user.get("username")}</h1>

            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/login/" element={<Login />} />

            </Routes>

        </Router>

    );
}
export default Main;
