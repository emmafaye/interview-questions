// BOT IP Detection ----------------
// 1. Expect an array of IP addresses
// 2. Deny matching IPs from the array

// BONUS: 2 possible data variations
// 1. 
// BONUS: Some of the IPs are single IPs, others are a range of all sub IPs
// BONUS: Create 2-4 example test cases
// BONUS: Determine Big O performance of solution

const denyList = new Set([
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
]);

// Range Formats & Solutions --------------------
// Arrays:
// -- const range = ['40.76.0.247', '40.76.255.247'];
// Cider Format Solution:
// -- 192.168.1.1/24
// -- https://michelburnett27.medium.com/understanding-cidr-notation-and-ip-address-range-3ad28194bc8d
// String Comparison Solution:
// -- Requires padding, needs the same number of digits to give a correct result
// -- Trade off is that it loops through each char code for each number in the string
// ASCII Char Code
// -- https://www.w3schools.com/charsets/ref_html_ascii.asp

// No IP Ranges, only static IPs
function verifyIPAddress(ipAddress) {
    if (denyList.has(ipAddress)) {
        return true;
    }

    return false;
}
console.log(verifyIPAddress('40.76.163.7'));

// Test Cases:
// 1. Sanity Check (true == true)
console.assert(true == true, '⚠️ Sanity Check');
// 2. Character Assertion Sanity
console.assert('xyz' > 'abc', 'Character Assert Sanity');