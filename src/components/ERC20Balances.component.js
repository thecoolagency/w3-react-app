import { useERC20Balances } from "react-moralis";

function ERC20Balances(props) {
  const { data: assets, isLoading, isFetching, error } = useERC20Balances(props);

  console.log(assets);

if (!assets) return null;

  if (isLoading)
    return (
      <div>IS LOADING ...</div>
    );

  if (isFetching)
    return (
      <div>IS FETCHING ...</div>
    );

  else
  
    return (

      <div className="list list-tokens">
        <h5>Total tokens: {assets.length}</h5>
        <ul>
          {assets.map(asset => (
            <li key={asset}>
              <span>{asset.name}</span> |&nbsp;
              <span>{asset.symbol}</span> |&nbsp;
              <span>{asset.balance}</span> |&nbsp;
              <span>{asset.token_address}</span>
            </li>
          ))}
          {error && <>{JSON.stringify(error)}</>}
          <code>
            <pre>{JSON.stringify(assets, null, 2)}</pre>
          </code>
        </ul>
      </div>
      
    );

}
export default ERC20Balances;
