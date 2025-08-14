import findArrangement from "./lib/battle-field.js";
import parsePlatoons from "./lib/parse-platoons.js";

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
