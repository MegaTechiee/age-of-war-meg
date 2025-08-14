const platoonsAdvantageOverMap = {
  "Militia": ["Spearmen", "LightCavalry"],
  "Spearmen": ["LightCavalry", "HeavyCavalry"],
  "LightCavalry": ["FootArcher", "CavalryArcher"],
  "HeavyCavalry": ["Militia", "FootArcher", "LightCavalry"],
  "CavalryArcher": ["Spearmen", "HeavyCavalry"],
  "FootArcher": ["Militia", "CavalryArcher"]
};

export default platoonsAdvantageOverMap;