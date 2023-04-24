import React, {useState} from "react";

const SearchComponent = (props) => {
    const [Search, setSearch] = useState("");
  return (
    <form
      className="searchForm initialForm"
      onSubmit={(e) => {
        props.submit(e, { Search });
        setSearch("");
      }}
    >
      <button type="submit" className="search-btn initial-btn">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        placeholder="Ready, Set, Go"
        className="search-bar initial-bar"
        value={Search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};
export default SearchComponent;
