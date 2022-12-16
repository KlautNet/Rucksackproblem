const weightConstraint = 17;
const items = [[3, 4], [4, 5], [7, 10], [8, 11], [9, 13]];

const knapsack = (items: number[][], weightConstraint: number): number => {
    // Set the maximum value to 0
    let maxValue = 0;
  
    // Iterate over all combinations of items
    for (let i = 0; i < (1 << items.length); i++) {
      // Initialize the total weight and total value to 0
      let totalWeight = 0;
      let totalValue = 0;
  
      // Iterate over the items and update the total weight and total value
      for (let j = 0; j < items.length; j++) {
        if (i & (1 << j)) {
          totalWeight += items[j][0];
          totalValue += items[j][1];
        }
      }
  
      // Update the maximum value if the total weight does not exceed the weight constraint
      if (totalWeight <= weightConstraint) {
        maxValue = Math.max(maxValue, totalValue);
      }
    }
  
    return maxValue;
  }

  const maxValue = knapsack(items, weightConstraint);
  console.log(`The maximum value is ${maxValue}.`);