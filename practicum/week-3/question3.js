/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1] 
        ]
*/

var PascalTriangle = function (n) {
    if (n === 0) return [];
    if (n === 1) return [[1]];

    var answer = [];
    for (var i = 1; i <= n; i++) {
        var tmp = [];
        for (var j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                tmp.push(1);
            } else {
                tmp.push(answer[i - 2][j - 1] + answer[i - 2][j]);
            }
        }
        answer.push(tmp);
    }
    return answer;
};
