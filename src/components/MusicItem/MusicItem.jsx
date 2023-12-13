import React, { useState } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import "./MusicItem.css";

const MusicItem = ({
  title,
  artist,
  album,
  releaseDate,
  genre,
  activeIndex,
  setActiveIndex,
  index,
}) => {
  return (
    <div className="music-item">
      <span className="text">{title}</span>
      <span className="text">{artist}</span>
      <span className="text">{album}</span>
      <span className="text">{releaseDate}</span>
      <span className="text">{genre}</span>
      <button type="submit">Delete</button>
    </div>
  );
};

export default MusicItem;
