import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [Keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${Keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-text"
          placeholder="Type a word"
          onChange={handleKeyword}
        />
        <button type="button" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}
