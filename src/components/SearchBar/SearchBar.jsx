import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  return (
    <div ckassName="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
      </div>
      {/* <div className="dataResult">
        {data.map((value, key) => {
          return (
            <a className="dataItem">
              <p>{value.title}</p>
            </a>
          );
        })}
      </div> */}
    </div>
  );
}

export default SearchBar;
