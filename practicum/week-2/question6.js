/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    if(input.length % 2 == 0){
        var pt = input.length / 2;
        return((input[pt-1] + input[pt]) / 2);
    } else {
        var pt = (input.length + 1) / 2;
        return(input[pt]);
    }

};