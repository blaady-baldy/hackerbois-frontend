import fetch from "node-fetch";
import Moralis from "moralis";
import dotenv from "dotenv";
dotenv.config();

async function uploadMetaData(
  name,
  image,
  description,
  ownerHistory,
  repairHistory
) {
  const serverUrl = process.env.SERVER_URL;
  const appId = process.env.APP_ID;
  const masterKey = process.env.MASTER_KEY;
  Moralis.start({ serverUrl, appId, masterKey });

  const web3 = await Moralis.Web3.enable();
  const chainIdDec = await web3.eth.getChainId();
  await Moralis.enableWeb3({ chainId: chainIdDec });

  const metaData = {
    name: name,
    image: image,
    description: description,
    ownerHistory: ownerHistory,
    repairHistory: repairHistory,
  };
  const file = new Moralis.File("file.json", {
    base64: btoa(JSON.stringify(metaData)),
  });
  await file.saveIPFS({ useMasterKey: true });
  console.log(file.ipfs());

  return file.ipfs();
  //   console.log(file.hash());
}

async function storeOwnerHistory(ipfs, newOwner) {
  const ipfs_url = ipfs;
  const res = await fetch(ipfs_url);
  if (res.ok) {
    const oldRepairURI = await res.json();
    console.log(oldRepairURI);
    var name = oldRepairURI["name"];
    var description = oldRepairURI["description"];
    var repairHistory = oldRepairURI["repairHistory"];
    var image = oldRepairURI["image"];
    var ownerHistory = oldRepairURI["ownerHistory"];
  }

  ownerHistory.push(newOwner);

  const result = await uploadMetaData(
    name,
    image,
    description,
    ownerHistory,
    repairHistory
  );
  return result;
}

// async function main() {
//     await storeOwnerHistory("https://ipfs.io/ipfs/QmQNm3U5tAPqgGEC77QhwKgt5ngTdKyEcPjxH1hQXe5Y61%22)
// }
// }

export default storeOwnerHistory;
