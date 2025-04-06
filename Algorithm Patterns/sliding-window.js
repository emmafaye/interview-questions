// Typical variable format
// k = window size
// n = array length
// Time Complexity: O(3n) -- 2x slice is O(2n) + O(n) for loop

function maxSubarraySumSlidingWindow(arr, windowSize) {
    const n = arr.length;

    if (n < windowSize) {
        return null; // Handle case where window size is larger than array
    }

    let windowSum = arr.slice(0, windowSize).reduce((a, b) => a + b, 0);
    let maxSum = windowSum;
    let maxStartIndex = 0;

    for (let i = 0; i < n - windowSize; i++) {
        windowSum = windowSum - arr[i] + arr[i + windowSize];
        if (windowSum > maxSum) {
            maxSum = windowSum;
            maxStartIndex = i + 1;
        }
    }

    return [arr.slice(maxStartIndex, maxStartIndex + windowSize), maxSum];
}

console.log(maxSubarraySumSlidingWindow([0,3,4,62,6,3,2,1], 3));