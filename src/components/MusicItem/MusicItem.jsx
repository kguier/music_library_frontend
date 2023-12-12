import React, { useState } from "react";

const MusicItem = ({ title, activeIndex, setActiveIndex, index }) => {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
};

export default MusicItem;
