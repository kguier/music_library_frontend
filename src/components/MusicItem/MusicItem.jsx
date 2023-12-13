import React, { useState } from "react";

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
    </div>
  );
};

export default MusicItem;
