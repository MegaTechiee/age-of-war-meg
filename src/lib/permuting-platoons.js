const platoonsPermutations = (platoonTypesArray) => {
  // console.log("calling platoonspermutations")
  // if only one item, return it as the only permutation
  if (platoonTypesArray.length === 1) {
    return [platoonTypesArray];
  }

  let allPermutations = [];
  // console.log('platoonTypesArray', platoonTypesArray)

  platoonTypesArray.forEach((currentItem, index) => {
    // Get all items except the current one
    let remainingItems = platoonTypesArray.filter((_, i) => i !== index);

    // Get permutations of the remaining items
    let smallerPermutations = platoonsPermutations(remainingItems);

    // Add current item to the front of each smaller permutation
    smallerPermutations.forEach((perm) => {
      allPermutations.push([currentItem, ...perm]);
    });
  });

  // console.log("allpermutatinos", allPermutations)
  return allPermutations;
}

export default platoonsPermutations;