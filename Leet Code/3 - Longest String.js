// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substring = [];
    let temp = 0
    let count = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {
        if (substring.includes(s[i])){
            if (temp > count) count = temp;
            temp = 1;
            substring = [s[i]];
        } else {
            substring.push(s[i]);
            temp++;
        }
    }
    if (temp > count) count = temp;
    return count;
};

console.log(lengthOfLongestSubstring("dvdf"));