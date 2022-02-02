import { useNFTBalances } from "react-moralis";

function NFTBalances(props) {
  const { data: assets, isLoading, isFetching, error } = useNFTBalances(props);

  // console.log(assets);

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

      <div className="list list-nfts">
        <h5>Total NFT's: {assets.total}</h5>
        <ul>
          {assets.result.map(asset => (
            <li key={asset}>
              <img style={{maxWidth:'200px',display:'inline'}} src={asset.image} alt={asset.name} />
              <span>{asset.token_id}</span> |&nbsp;
              <span>{asset.contract_type}</span> |&nbsp;
              <span>{asset.name}</span> |&nbsp;
              <span>{asset.symbol}</span> |&nbsp;
              <span>{asset.token_address}</span> |&nbsp;
              <span><a href={asset.token_uri}>URL</a></span>
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
export default NFTBalances;
