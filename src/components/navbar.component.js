import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

    render() {

        return (
            
            <div className="container">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Dashboard</Link>
                </nav>
            </div>

        );
    }
}
export default Navbar;
