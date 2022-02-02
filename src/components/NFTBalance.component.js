import { useNFTBalances } from "react-moralis";

function NFTBalances(props) {
  const { data: assets } = useNFTBalances(props);

  // console.log(assets);

if (!assets) return null;

  return (

    <div className="list list-nfts">
      <h5>Total NFT's: {assets.total}</h5>
      <ul>
        {assets.result.map(asset => (
          <li key={asset}>
            <img style={{maxWidth:'200px'}} src={asset.image} alt={asset.name} />
            <span>{asset.token_id}</span> |
            <span>{asset.contract_type}</span> |
            <span>{asset.name}</span> |
            <span>{asset.symbol}</span> |
            <span>{asset.token_address}</span> |
            <span><a href={asset.token_uri}>URL</a></span>
          </li>
        ))}
      </ul>
    </div>

  );
}
export default NFTBalances;
