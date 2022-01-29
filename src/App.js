import { useEffect } from "react";

import './styles/theme.css';

import { useMoralis } from "react-moralis";
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

      <div>
        <button className="dt" onClick={() => authenticate({ signingMessage: "TCA Authentication" })}>Authenticate</button>
        <button onClick={() => authenticate({ provider: "walletconnect" })}>Authenticate <span className="dt"> Wallet Connect</span></button>
      </div>

    );
  }

  return (

    <div>
      <Main />
      <NativeBalance />
      <LogOut />
    </div>

  );
}

export default App;