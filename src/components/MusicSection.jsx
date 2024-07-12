
import React, { useState, useEffect } from "react";
import AlbumCard from "./albumCard.jsx";

const MusicSection = ({ artistName, querySelector }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          let { data } = await response.json();
          setSongs(data.slice(0, 4));
        } else {
          throw new Error("Errore nel fetching");
        }
      } catch (err) {
        console.log("errore", err);
      }
    };
    fetchSongs();
  }, [artistName]);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id={querySelector}>
      {songs.map((song) => (
        <AlbumCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default MusicSection;
