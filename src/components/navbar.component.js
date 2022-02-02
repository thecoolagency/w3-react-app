import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/my-tokens">Tokens</Link>
            <Link to="/my-nfts">NFT's</Link>
        </nav>

    );
}
export default Navbar;
