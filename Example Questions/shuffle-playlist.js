// Shuffle playlist -------------
// 1. Expect an array of objects
// 2. Randomly shuffle the array
// 3. Return the shuffled array

// BONUS: 4 possible data variations
// ✅ 1. An array of objects
// 2. An object of objects
// 3. An array of objects but order is determined by an order property
// 4. An array of arrays but order is determined by an order property
// 5. Array of IDs for song IDs that reference a data object with those id mappings
// ✅ BONUS: Create 2-4 example test cases
// ✅ BONUS: Determine Big O performance of solution

// Explaining Points
// - Is math.random truly random
// - How performant is splice
// - Trade-offs of this solution

// Data Variant #1
const playlist = [
    {
        id: "387216b8ea3b4ae5",
        song: "Kato",
        artist: "Andy Leech",
        url: "https://open.spotify.com/track/5egJsT7VekYdeYy5ORHeHI?si=387216b8ea3b4ae5",
    },
    {
        id: "c891f04d3cf3438e",
        song: "Moonlight",
        artist: "Azaleh",
        url: "https://open.spotify.com/track/465UQ2EaNRvmuzvhXWFmGn?si=c891f04d3cf3438e",
    },
    {
        id: "3194392ec5de485c",
        song: "Stubborn",
        artist: "barnacle boi",
        url: "https://open.spotify.com/track/7iOFFkOU2QcvAX1ZzIbZDr?si=3194392ec5de485c",
    },
    {
        id: "953a1a2939554a07",
        song: "Higher",
        artist: "WEVLTH",
        url: "https://open.spotify.com/track/0HHdsqqY9qbgUV0EstbDqU?si=953a1a2939554a07",
    },
];

// Performance: O(n) -- Maybe 02(n) because of splice
function shufflePlaylist(playlist) {
    let original = Array.from(playlist);
    let shuffled = [];

    while (original.length > 0) {
        // Grab random number based on playlist length
        let randomNumber = Math.floor(Math.random() * original.length);
        // remove song from original list and add to shuffled list
        let song = original.splice(randomNumber, 1);
        shuffled.push(song);
        
        // console.log(
        //     randomNumber,
        //     playlist.splice(randomNumber, 1)
        //     original
        //     shuffled
        // );
    }

    return shuffled;
}
const shuffled = shufflePlaylist(playlist);

// Test Cases:
// 1. Sanity Check (true == true)
console.assert(true == true, '⚠️ Sanity Check');
// 2. Ensure playlist and shuffled arrays are the same length
console.assert(playlist.length == shuffled.length, '⚠️ Lengths not equal');
// 3. Ensure every song in playlist exists in shuffled array
// console.assert(playlist.some(song => shuffled.includes(song)), '⚠️ All songs are not present in shuffled list');
// 4. Ensue playlist and shuffled are different
console.assert(JSON.stringify(playlist) !== JSON.stringify(shuffled), '⚠️ Lists are not different');

console.log('Original', playlist);
console.log('Shuffled', shuffled);