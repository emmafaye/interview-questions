function findConsecutiveMatchesLinearSlidingWindow(playlist1, playlist2, expectedOrder) {
  /*
  Finds 3 consecutive matches within two playlists simultaneously 
  based on an expected order in O(n) time using sliding window.

  Args:
    playlist1: The first playlist.
    playlist2: The second playlist.
    expectedOrder: The expected order of songs and artists.

  Returns:
    A tuple:
      - A boolean indicating whether a match was found.
      - The playlist where the match was found (or None if no match).
  */

  if (expectedOrder.length !== 3) {
    throw new Error("Expected order must contain exactly three songs.");
  }

  if (playlist1.length !== playlist2.length) {
    throw new Error("Playlists must have the same length.");
  }

  const [firstSong, secondSong, thirdSong] = expectedOrder;
  const windowSize = 3;

  for (let i = 0; i <= playlist1.length - windowSize; i++) {
    const window1 = playlist1.slice(i, i + windowSize);
    const window2 = playlist2.slice(i, i + windowSize);

    if (JSON.stringify(window1) === JSON.stringify(expectedOrder)) {
      return [true, playlist1];
    }

    if (JSON.stringify(window2) === JSON.stringify(expectedOrder)) {
      return [true, playlist2];
    }
  }

  return [false, null];
}

// Example usage
const playlist1 = [
  ["Song1", "Artist1"],
  ["Song3", "Artist3"],
  ["Song2", "Artist2"],
  ["Song1", "Artist1"],
  ["Song1", "Artist1"],
  ["Song2", "Artist2"],
];

const playlist2 = [
  ["Song2", "Artist2"],
  ["Song1", "Artist1"],
  ["Song3", "Artist3"],
  ["Song4", "Artist4"],
  ["Song3", "Artist3"],
  ["Song2", "Artist2"],
];

const expectedOrder = [
  ["Song4", "Artist4"],
  ["Song3", "Artist3"],
  ["Song2", "Artist2"],
];

const [foundMatch, matchingPlaylist] = findConsecutiveMatchesLinearSlidingWindow(playlist1, playlist2, expectedOrder);

if (foundMatch) {
  console.log(`Match found in playlist: ${matchingPlaylist}`);
} else {
  console.log("No match found in either playlist.");
}



function findContigousMatches(playlist, expectedOrder) {
  const curSize = expectedOrder.length;
  let cur = [];
  let matches = 0;
  let matchFound = false;

  for (let i = 0; i < curSize; i++) {
    cur.push(playlist[i]);
  }
  // console.log(cur);

  for (let i = curSize; i < playlist.length; i++) {
    // console.log(playlist[i], playlist[i - curSize]);
    
    cur.push(playlist[i]);
    cur.pop(playlist[i - curSize]);
    // console.log(cur[0], cur[1], cur[2]);
    console.log(playlist[i], expectedOrder[matches])
    if (playlist[i][0] === expectedOrder[matches][0] && playlist[i][1] === expectedOrder[matches][1]) {
      matches++;
    }

    if (matches === curSize) {
      matchFound = true;
      break;
    }
  }

  for (let i = 0; i < playlist.length; i++) {
    if (playlist[i][0] === expectedOrder[matches][0] && playlist[i][1] === expectedOrder[matches][1]) {
      console.log(playlist[i], expectedOrder[matches])
      matches++;
    }

    if (matches === curSize) {
      matchFound = true;
      break;
    }
  }

  return [matchFound, cur];
}

const playlist1 = [
  ['Song1', 'Artist1'],
  ['Song3', 'Artist3'],
  ['Song2', 'Artist2'],
  ['Song1', 'Artist1'],
  ['Song1', 'Artist1'],
  ['Song2', 'Artist2'],
];

const playlist2 = [
  ['Song2', 'Artist2'],
  ['Song1', 'Artist1'],
  ['Song3', 'Artist3'],
  ['Song4', 'Artist4'],
  ['Song3', 'Artist3'],
  ['Song2', 'Artist2'],
];

const expectedOrder = [
  ['Song4', 'Artist4'],
  ['Song3', 'Artist3'],
  ['Song2', 'Artist2'],
];

const [foundMatch, matchingPlaylist] = findContigousMatches(playlist2, expectedOrder);

if (foundMatch) {
  console.log(`Match found in playlist: ${matchingPlaylist}`);
} else {
  console.log('No match found in either playlist.');
}

  // const [firstSong, secondSong, thirdSong] = expectedOrder;
  // const windowSize = 3;

  // for (let i = 0; i <= playlist1.length - windowSize; i++) {
  //   const window1 = playlist1.slice(i, i + windowSize);
  //   const window2 = playlist2.slice(i, i + windowSize);

  //   if (JSON.stringify(window1) === JSON.stringify(expectedOrder)) {
  //     return [true, playlist1];
  //   }

  //   if (JSON.stringify(window2) === JSON.stringify(expectedOrder)) {
  //     return [true, playlist2];
  //   }
  // }

  // return [false, null];