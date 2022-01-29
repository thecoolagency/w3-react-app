import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMoralis } from "react-moralis";

import Dashboard from "./dashboard.component";
import Home from "./public/home.component";
import Navbar from "./navbar.component";

const Main = () => {
  const { user } = useMoralis();

    return (

        <Router>
        
            <Navbar />
            
            <h5>Wallet {user.get("username")}</h5>

            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard/" element={<Dashboard />} />

            </Routes>

        </Router>

    );
}
export default Main;
