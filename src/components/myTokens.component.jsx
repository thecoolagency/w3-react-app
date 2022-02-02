import React from "react";

import ERC20Balances from "components/ERC20Balances.component";

const MyTokens = () => {

    return (

        <div className="container page">

            <h1>My Tokens</h1>

            <ERC20Balances />
            
            <hr />

        </div>

    );
}
export default MyTokens;