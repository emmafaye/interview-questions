// bot-ip-detection.js

// BOT IP Detection ----------------
// 1. Expect an array of IP addresses
// 2. Deny matching IPs from the array

// BONUS: 2 possible data variations
// 1. 
// BONUS: Some of the IPs are single IPs, others are a range of all sub IPs
// BONUS: Create 2-4 example test cases
// BONUS: Determine Big O performance of solution

// cider format????

const denyList = [
    '20.191.45.212',
    '40.88.21.235',
    '40.76.173.151',
    '40.76.163.7',
    '20.185.79.47',
    '52.142.26.175',
    '20.185.79.15',
    '52.142.24.149',
    '40.76.162.208',
    '40.76.163.23',
    '40.76.162.191',
    '40.76.162.247'
];


// const range = ['40.76.0.247', '40.76.255.247'];

// 40.76.0.247
// 040.076.000.247

// Char Code
// 0	48
// 1	49
// 2	50
// 3	51
// 4	52
// 5	53
// 6	54
// 7	55
// 8	56
// 9	57

// Range: 0.0.0.0 - 1.0.0.0
// Input: 0.1.0.0
// String Comparison
// -- Requires padding, needs the same number of digits to give a correct result
// -- Trade off is that it loops through each char code for each number in the string
console.log('abc' > 'xyz');

function verifyIPAddress(ipAddress) {
    
}

verifyIPAddress('40.76.163.7');