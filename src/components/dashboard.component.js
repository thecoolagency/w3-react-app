import React, { Component } from "react";

import ERC20Balance from "./ERC20Balance.component";

const Dashboard = () => {

    return (

        <div className="container page">

            <div className="text-center">
                <h1>Dashboard</h1>
            </div>

            <ERC20Balance />

        </div>

    );
}
export default Dashboard;