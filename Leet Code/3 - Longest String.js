// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substring = new Set();
    let deleted = 0
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {
        while (substring.has(s[i])){
            substring.delete(s[deleted]);
            deleted++;
        }
        substring.add(s[i]);
        maxSize = Math.max(maxSize, i - deleted + 1);
    }
    return maxSize;
};

console.log(lengthOfLongestSubstring("ABCDEFGABEF"));