
import React from "react";
import { useDispatch } from "react-redux";
import { selectSong } from "../redux/slices/searchSlice";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();

  const handleSelectSong = () => {
    dispatch(selectSong(song));
  };

  return (
    <div className="col text-center" onClick={handleSelectSong}>
      <img className="img-fluid song-image" src={song.album.cover_medium} alt="track" />
      <p>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
