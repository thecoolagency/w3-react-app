import { useMoralis } from "react-moralis";

const LoginWallet = () => {

  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <div className="container">
      <button className="dt" onClick={() => authenticate({ signingMessage: "TCA Authentication" })} disabled={isAuthenticating}>Authenticate</button>
      <button onClick={() => authenticate({ provider: "walletconnect", signingMessage: "TCA Authentication" })} disabled={isAuthenticating}>Authenticate <span className="dt"> Wallet Connect</span></button>
     </div>
  );
}

export default LoginWallet;