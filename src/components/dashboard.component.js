import React, { Component } from "react";

import ERC20Balance from "components/ERC20Balance.component";
import SwitchChain from "components/switchChain.component";

const Dashboard = () => {

    return (

        <div className="container page">

            <div>
                <h1>Dashboard</h1>
            </div>

            <ERC20Balance />
            <SwitchChain />
            
            <hr />

        </div>

    );
}
export default Dashboard;