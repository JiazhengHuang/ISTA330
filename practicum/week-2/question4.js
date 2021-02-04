/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var cnt = 0;
    for(var i = 0; i < A.length; i++){
        var single = (B.match(new RegExp(A[i], "g")) || []).length;
        cnt += single;
    }
    return cnt;
};