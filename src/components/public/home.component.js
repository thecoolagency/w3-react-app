import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (

            <div className="container page">

                <div className="text-center">
                    <h1>Web3 App using Moralis</h1>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-4">
                        <h3>login</h3>
                        <p>login using your favorite wallet</p>
                    </div>
                    <div className="col-md-4">
                        <h3>item</h3>
                        <p>back end runs on moralis</p>
                    </div>
                </div>

                <hr />

            </div>

        );
    }
}
