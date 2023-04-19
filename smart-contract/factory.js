import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x77F4B45e29154485497e1969273cE59a809869b4"
);
//0xEC2D2894299a9cfB5F306ec7Cc7d1457f484645A
export default instance;