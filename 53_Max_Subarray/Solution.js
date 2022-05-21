var maxSubArray = function(nums) {
	// initialize the currentSum with the first element value
    let currentSum = nums[0], maxSum = nums[0]
    
	// Start from the second element 
    for(let i = 1; i < nums.length; i ++){
		// Check if the current sum is less than 0 to avoid negative sums
		// If it is grater than 0 add it to the sum;
        if(currentSum < 0) 
            currentSum = nums[i];
        else 
            currentSum += nums[i];
		// Always check for the max sum, if the current sum is greater, then replace the maxSum
        if (currentSum > maxSum)
            maxSum = currentSum;
    }
    return maxSum
};