import platoonsPermutations from "./permuting-platoons.js";


export const platoonFight = (myPlatoon, oppPlatoon) => {
  const myPower = myPlatoon.powerAgainst(oppPlatoon.type);
  const oppPower = oppPlatoon.count;

  if (myPower > oppPower) return "Win";
  if (myPower === oppPower) return "Draw";
  return "Loss";
}


const findArrangement = (myPlatoons, oppPlatoons) => {
  // console.log("calling findArrangement")
  let allOrders = platoonsPermutations(myPlatoons);
  // console.log('allorders', allOrders)
  for (let order of allOrders) {
    let wins = 0;
    for (let i = 0; i < order.length; i++) {
      if (platoonFight(order[i], oppPlatoons[i]) === "Win") {
        wins++;
      }
    }
    if (wins > 3) {
      // As mentioned in mail doc atleast 3 win @lakshman
      return order; 
    }
  }
  return null; // No winning order found
}

export default findArrangement;