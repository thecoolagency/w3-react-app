import { useMoralis, useERC20Balances } from "react-moralis";

function ERC20Balance(props) {
  const { data: assets } = useERC20Balances(props);
  const { Moralis } = useMoralis();

  // console.log(assets);

if (!assets) return null;

  return (
    <div style={{ width: "65vw", padding: "15px" }}>
      <ul>
        {assets.map(asset => (
          <li key={asset}><span>{asset.name}</span> | <span>{asset.symbol}</span> | <span>{asset.balance}</span> | <span>{asset.token_address}</span></li>
        ))}
      </ul>
    </div>
  );
}
export default ERC20Balance;
