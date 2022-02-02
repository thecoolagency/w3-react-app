import { useEffect } from "react";
import { useMoralis } from "react-moralis";

import 'styles/theme.css';

import Main from "components/main.component";
import LoginWallet from "components/authentification/loginWallet.component";
import LogOut from "components/authentification/logout.component";
import NativeBalance from "components/nativeBalance.component";

function App() {

  const { isAuthenticated, isWeb3Enabled, enableWeb3, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);

  // console.log("is web3 enabled: " + isWeb3Enabled);
  // console.log("is authenticated: " + isAuthenticated);

  if (!isAuthenticated) {
    return (

      <LoginWallet />

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