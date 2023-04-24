import React, { useState } from "react";

const FormComponent = (props) => {
  const [Search, setSearch] = useState("");

  return (
    <div className="row mainHeader">
      <div className="col-md-6 logoArea">
        <div className="logo">
          ChefMan <small>| by ishandeveloper</small>
        </div>
      </div>
      <div className="col-md-6 searchArea">
        <form
          className="searchForm"
          onSubmit={(e) => {
            props.submit(e, { Search });
            setSearch("");
          }}
        >
          <button type="submit" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            placeholder="Ready, Set, Go"
            className="search-bar"
            value={Search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
