import { useEffect } from "react";
import { useMoralis } from "react-moralis";

import './styles/theme.css';

import Main from "./components/main.component";
import LogOut from "./components/authentification/logout.component";
import NativeBalance from "./components/nativeBalance.component";

function App() {

  const { authenticate, isAuthenticated, isAuthenticating, isWeb3Enabled, enableWeb3, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);

  if (!isAuthenticated) {
    return (

      <div className="container">
        <button className="dt" onClick={() => authenticate({ signingMessage: "TCA Authentication" })}>Authenticate</button>
        <button onClick={() => authenticate({ provider: "walletconnect", signingMessage: "TCA Authentication" })}>Authenticate <span className="dt"> Wallet Connect</span></button>
      </div>

    );
  }

  return (

    <div className="container">
      <Main />
      <NativeBalance />
      <LogOut />
    </div>

  );
}

export default App;