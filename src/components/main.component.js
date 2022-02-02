import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMoralis } from "react-moralis";

import Dashboard from "components/dashboard.component";
import MyTokens from "components/myTokens.component";
import MyNFTs from "components/myNFTs.component";
import Home from "components/home.component";
import Navbar from "components/navbar.component";

const Main = () => {
  const { user } = useMoralis();

    return (

        <Router>
        
            <Navbar />
            
            <h5>Wallet {user.get("username")}</h5>

            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard/" element={<Dashboard />} />
                <Route exact path="/my-tokens/" element={<MyTokens />} />
                <Route exact path="/my-nfts/" element={<MyNFTs />} />

            </Routes>

        </Router>

    );
}
export default Main;
