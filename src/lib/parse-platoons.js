import Platoon from "../classes/Platoon.js";

function parsePlatoons(line) {
  const platoons = line.split(";");

  return platoons.map(platoonText => {
    // Split type and count
    const [type, count] = platoonText.split("#");

    return new Platoon(type, parseInt(count, 10));
  });
}

export default parsePlatoons;