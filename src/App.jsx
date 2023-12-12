import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import MusicList from "./components/MusicList/MusicList";
import MusicItem from "./components/MusicItem/MusicItem";

function App() {
  const [music, setMusic] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchMusic = async () => {
    try {
      const response = await axios.get("https://localhost:7149/api/Songs");
      setMusic(response.data);
    } catch (error) {
      console.warn("Error in fetchMusic request: ", error);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div className="App">
      <Header />
      {
        <MusicList
          music={music}
          activeIndex={{ activeIndex }}
          setActiveIndex={setActiveIndex}
        />
      }
    </div>
  );
}

export default App;
