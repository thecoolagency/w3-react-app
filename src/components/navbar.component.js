import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/my-tokens">Tokens</Link></li>
                <li><Link to="/my-nfts">NFT's</Link></li>
            </ul>
        </nav>

    );
}
export default Navbar;
