import platoonsAdvantageOverMap from '../constants/platoons-advantange-over.js';

class Platoon {
  constructor(type, count) {
    this.type = type;
    this.count = count;
  }

  powerAgainst(opponentType) {
    if (platoonsAdvantageOverMap[this.type].includes(opponentType)) {
      // Double soldiers as said in the mail doc
      return this.count * 2; 
    }
    // Normal power otherwise
    return this.count;
  }
}

export default Platoon;