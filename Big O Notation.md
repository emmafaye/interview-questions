# Time Complexity Explained

### Terminology References
- n - number of iterations, in other words the runtime is porportational to the iteration of data given
- log - runtime grows proportionally to the logarithm of the input size, meaning that as the input size increases, the runtime increases much slower

## Notations
Order by growth rate, slowest growth rate (i.e. fastest execution)
### O(1) Constant Time
- Fastest possible execution of an algorithm or script
- Growth Rate: 1x
- Explanation: The time taken by the algorithm remains the same regardless of the input size.
- Example: Accessing an element in an array by its index.

### O(Log(n)) Logarithmic Time
- Slightly slower execution but does increase with iterations
- Growth Rate: Slightly faster than linear.
- Explanation: The time taken by the algorithm increases logarithmically with the input size.
- Example: Binary Search

### O(n) Linear Time
- Most common execution rate essientially doubles, additionally, O(2n) is considered to be the same. An example of this is traversing through two non-nested arrays separately.
- Growth Rate: 2x
- Explanation: The time taken by the algorithm increases linearly with the input size.
- Example: Traversing an array once.

### O(n Log(n)) Linearithmic Time
- Growth Rate: Between linear and quadratic
- Explanation: The time taken by the algorithm increases slightly faster than linearly.
- Example: Efficient sorting algorithms like Merge Sort and Quick Sort.

### O(n^2) Quadratic Time
- Growth Rate: 4x
- Explanation: The time taken by the algorithm increases quadratically with the input size.
- Example: Nested loops iterating over the same input.

### O(n^3) Cubic Time
- Growth Rate: 8x
- Explanation: The time taken by the algorithm increases cubically with the input size.
- Example: Three nested loops iterating over the same input.

### O(2^n) Exponential Time
- Growth Rate: Grows very rapidly with the input size.
- Explanation: The time taken by the algorithm doubles with each increase in input size.
- Example: Some recursive algorithms.

### O(n!) Factorial Time
- Growth Rate: Grows extremely rapidly with the input size.
- Explanation: The time taken by the algorithm increases factorially with the input size.
- Example: Finding all permutations of a set.