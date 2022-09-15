import { combineReducers } from "redux";

//REDUCERS
const songsReducer = () => {
  return [
    { title: "Baby be mine", duration: "4:05" },
    { title: "No Scrubs", duration: "2:30" },
    { title: "Dark Sentencer", duration: "6:45" },
    { title: "Island in the Sun", duration: "3:22" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
