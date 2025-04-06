// Given an array of strings, remove those that are prefixes of one or more other
// strings and return the remaining strings in the order in which they appear in
// the input array.
// 
// Example:
// 
input = ["abc", "ab", "bc", "abc hello"]
// input = ["abc", "ab", "bc", "abc hello", "de", "de", "abc hello 123"]
// 
// output = ["bc", "abc hello 123"]

// Python:  a.startswith(b) returns `true` iff b is a prefix of a

function removePrefixes(input) {
    let output = [];
    
    for (let i = 0; i < input.length; i++) {
        for (w = i; w < input.length; w++) {
            let prefix = input[i];
            let word = input[w];
            
            if (word.startsWith(prefix)) {
                output.push(prefix);
            }
        }
    }
    
    return output;
}

console.log(removePrefixes(input));
console.assert(input.length === removePrefixes(input).length, "Length didn't change");
console.assert(removePrefixes(['abc', 'abc hello']), "Should remove: 'abc hello'");