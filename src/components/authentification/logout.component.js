import { useMoralis } from "react-moralis";

const LogOut = () => {

  const { logout, isAuthenticating } = useMoralis();

  return (

    <button className="reset-btn p0" onClick={() => logout()} disabled={isAuthenticating}>log out</button>
    
  );
}

export default LogOut;