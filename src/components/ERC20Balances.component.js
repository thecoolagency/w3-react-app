import { useERC20Balances } from "react-moralis";

function ERC20Balances(props) {
  const { data: assets } = useERC20Balances(props);

  console.log(assets);

if (!assets) return null;

  return (

    <div className="list list-tokens">
      <h5>Total tokens: {assets.length}</h5>
      <ul>
        {assets.map(asset => (
          <li key={asset}><span>{asset.name}</span> | <span>{asset.symbol}</span> | <span>{asset.balance}</span> | <span>{asset.token_address}</span></li>
        ))}
      </ul>
    </div>
    
  );
}
export default ERC20Balances;
