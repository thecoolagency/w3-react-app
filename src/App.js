import './styles/theme.css';

import { useMoralis } from "react-moralis";
import Main from "./components/main.component";

function App() {
  const { authenticate, isAuthenticated, user, logout, isAuthenticating } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate({ signingMessage: "TCA Authentication" })}>Authenticate</button>
        <button onClick={() => authenticate({ provider: "walletconnect" })}>Authenticate Wallet Connect</button>
      </div>
    );
  }

  return (
    <div>
      <Main />
      <button onClick={() => logout()} disabled={isAuthenticating}>
        log out
      </button>
    </div>
  );
}

export default App;