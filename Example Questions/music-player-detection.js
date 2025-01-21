const currentSong = {
  title: "Song 1",
  artist: "Artist 1",
};

const previousSong = {
  title: "Song 2",
  artist: "Artist 2",
};

const playlist1 = [
  { title: "Song 1", artist: "Artist 1" },
  { title: "Song 2", artist: "Artist 2" },
  { title: "Song 3", artist: "Artist 3" },
];

const playlist2 = [
  { title: "Song 4", artist: "Artist 4" },
  { title: "Song 5", artist: "Artist 5" },
  { title: "Song 6", artist: "Artist 6" },
];

function findPlaylistIndex(song, playlist) {
  return playlist.findIndex((s) => s.title === song.title && s.artist === song.artist);
}

function isPlayingPlaylist(currentSong, previousSong, playlists) {
  for (const playlist of playlists) {
    const currentSongIndex = findPlaylistIndex(currentSong, playlist);
    const previousSongIndex = findPlaylistIndex(previousSong, playlist);

    if (currentSongIndex !== -1 && previousSongIndex !== -1) {
      // Both songs are in the playlist
      if (currentSongIndex - previousSongIndex === 1) {
        // Correct play order within the playlist
        return { playlist: playlist, isPlaying: true };
      }
    }
  }
  return { playlist: null, isPlaying: false };
}

const { playlist, isPlaying } = isPlayingPlaylist(currentSong, previousSong, [playlist1, playlist2]);

if (isPlaying) {
  console.log(`Playing Playlist: ${playlist[0].title} - ${playlist[0].artist}`); 
} else {
  console.log("Playing Shuffled");
}