// 557. Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// EX : Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(str) {
    
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};


// split('') -> splits each alphabets (h,e,l,l,o)
// split(' ') -> splits each words 