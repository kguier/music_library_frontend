import React, { useState } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";

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
    <div>
      <span>{title}</span>
      <span>{artist}</span>
      <span>{album}</span>
      <span>{releaseDate}</span>
      <span>{genre}</span>
      <button type="submit">Delete</button>
    </div>
  );
};

export default MusicItem;
