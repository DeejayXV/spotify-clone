
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLikeSong } from "../redux/slices/searchSlice";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Player = () => {
  const dispatch = useDispatch();
  const selectedSong = useSelector((state) => state.search.selectedSong);
  const likedSongs = useSelector((state) => state.search.likedSongs);
  const isLiked = selectedSong && likedSongs[selectedSong.id];

  const handleLike = () => {
    if (selectedSong) {
      dispatch(toggleLikeSong(selectedSong));
    }
  };

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 align-items-center">
            <div className="col-3 song-details d-flex align-items-center">
              {selectedSong && (
                <>
                  <img src={selectedSong.album.cover_small} alt="album cover" />
                  <p className="mb-0 ml-3">
                    <strong>{selectedSong.title}</strong><br />
                    <span>{selectedSong.artist.name}</span>
                  </p>
                  <div className="ml-3 heart-icon" onClick={handleLike} style={{ cursor: "pointer" }}>
                    {isLiked ? <HeartFill className="liked" /> : <Heart className="unliked" />}
                  </div>
                </>
              )}
            </div>
            <div className="col-6 player-container">
              <div className="playerControls d-flex justify-content-around">
                <a href="#">
                  <img src="/assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="/assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="/assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="/assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="/assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-2">
                <div role="progressbar"></div>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
