/*
Given an integer array, input,
find the subarray
which has the largest sum and return its sum.

Example:  input: [-12,3,-1,5,-2,1,-7]
          output: 7
          because [3,-1,5] has the largest sum.
          */

var largestSubarray = function (input) {
    var maxSum = 0;
    var leftIndex = 0;
    var rightIndex = input.length - 1;

    for (var i = 0; i < input.length; i++) {
        tmpSum = 0;
        for (var j = i; j < input.length; j++) {
            tmpSum += input[j];
            if (maxSum < tmpSum) {
                leftIndex = i;
                rightIndex = j;
                maxSum = tmpSum;
            }
        }
    }
    return maxSum;
};
