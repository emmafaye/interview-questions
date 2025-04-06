var findMaxAverage = function(nums, windowSize) {
    let currentSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < windowSize; i++) {
        currentSum += nums[i];
    }
    maxSum = currentSum;

    for (let i = windowSize; i < nums.length; i++) {
        currentSum = currentSum - nums[i - windowSize] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / windowSize;
};

// Maintaining windowSize as you're looping through the playlist
// Does window equal the expected order,
// If not, do someting similar to max average, slide the window
// Drop the left most element, to the right you'll add the next element in playlist