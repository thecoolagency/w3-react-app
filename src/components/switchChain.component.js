import { useChain } from "react-moralis";

function SwitchChain() {
  const { switchNetwork, chainId } = useChain();
  return (
    <>
      <button onClick={() => switchNetwork("0x1")}>Switch to Ethereum</button>
      <button onClick={() => switchNetwork("0x38")}>Switch to Smart Chain BNB</button>
      <button onClick={() => switchNetwork("0x89")}>Switch to Polygon Mainnet</button>
      <p>Current chainId: {chainId}</p>
    </>
  );
}
export default SwitchChain;