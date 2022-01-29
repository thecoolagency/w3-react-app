import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        
        <div className="container">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </div>

    );
}
export default Navbar;
