
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import MainSection from "./components/MainSection.jsx";
import Player from "./components/Player.jsx";

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (searchTerm) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`);
      if (response.ok) {
        let { data } = await response.json();
        setSearchResults(data.slice(0, 4));
      } else {
        throw new Error("Errore nel fetching");
      }
    } catch (err) {
      console.log("errore", err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar onSearch={handleSearch} />
        <MainSection searchResults={searchResults} />
      </div>
      <Player />
    </div>
  );
}

export default App;
