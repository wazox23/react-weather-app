import React from "react";
import searchImage from "../assets/search.png";
import "../Styles/SearchBar.scss";

interface SearchBarProps {
  cityName: string;
  onCityChange: (cityName: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  cityName,
  onCityChange,
  onSearch,
}) => (
  <div className="search-bar">
    <input
      type="text"
      value={cityName}
      onChange={(e) => onCityChange(e.target.value)}
      placeholder="enter city name"
    />
    <button
      onClick={onSearch}
      className="btn btn-light custom-search-button mx-2"
    >
      <img src={searchImage} alt="search" width={30} height={30} />
    </button>
  </div>
);

export default SearchBar;
