import findArrangement from "./lib/battle-field.js";
import parsePlatoons from "./lib/parse-platoons.js";


// const myLine = "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#155";
// const oppLine = "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";
// const myLine = "Spearmen#10;Militia#30;FootArcher#20;LightCavalry#1000;HeavyCavalry#155";
// const oppLine = "Militia#10;Spearmen#10;FootArcher#1000;LightCavalry#120;CavalryArcher#100";

// const myPlatoons = parsePlatoons(myLine);
// const oppPlatoons = parsePlatoons(oppLine);

// const arrangement = findArrangement(myPlatoons, oppPlatoons);

// if (arrangement) {
//   console.log(arrangement.map(p => `${p.type}#${p.count}`).join(";"));
// } else {
//   console.log("There is no chance of winning");
// }

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your platoons: ", (myLine) => {

  rl.question("Enter opponent platoons: ", (oppLine) => {

    const myPlatoons = parsePlatoons(myLine);
    const oppPlatoons = parsePlatoons(oppLine);

    const arrangement = findArrangement(myPlatoons, oppPlatoons);

    if (arrangement) {
      console.log('########################################################################')
      console.log(arrangement.map(p => `${p.type}#${p.count}`).join(";"));
      console.log('########################################################################')
    } else {
      console.log("There is no chance of winning");
    }

    rl.close();
  });
});
