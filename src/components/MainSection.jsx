
import React from "react";
import { useSelector } from "react-redux";
import MusicSection from "./MusicSection.jsx";
import AlbumCard from "./albumCard.jsx";

const MainSection = () => {
  const searchResults = useSelector((state) => state.search.results);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      {searchResults.length > 0 ? (
        <div className="row">
          <div className="col-10">
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {searchResults.map((song) => (
                <AlbumCard key={song.id} song={song} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <MusicSection artistName="queen" querySelector="rockSection" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <MusicSection artistName="katyperry" querySelector="popSection" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <MusicSection artistName="eminem" querySelector="hipHopSection" />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default MainSection;
