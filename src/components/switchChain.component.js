import { useChain } from "react-moralis";

function SwitchChain() {
  const { switchNetwork, chainId } = useChain();

  return (

    <div>

      {chainId == "0x1" &&
        <p>Current chainId: {chainId} - Ethereum Mainnet</p>
      }
      {chainId == "0x38" &&
        <p>Current chainId: {chainId} - Binance Smart Chain Mainnet</p>
      }
      {chainId == "0x89" &&
        <p>Current chainId: {chainId} - Polygon Mainnet</p>
      }

      {chainId != "0x1" &&
        <button onClick={() => switchNetwork("0x1")}>Switch to Ethereum Mainnet</button>
      }
      {chainId != "0x38" &&
      <button onClick={() => switchNetwork("0x38")}>Switch to Binance Smart Chain Mainnet</button>
      }
      {chainId != "0x89" &&
      <button onClick={() => switchNetwork("0x89")}>Switch to Polygon Mainnet</button>
      }
      
    </div>

  );
}
export default SwitchChain;