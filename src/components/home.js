import React from "react";
import logo from "../cooking.svg";
import SearchComponent from "./search";

const HomeComponent = (props) => {
  return (
    <div className="row hero">
      <div className="col-md-6 hero-left">
        <img src={logo} className="hero-img" alt="ChefMan" />
      </div>
      <div className="col-md-6 hero-right">
        <div className="logo initial-logo">
          ChefMan <small>| by ishandeveloper</small>
        </div>
        <div className="row">
          <SearchComponent submit={props.submit} />
        </div>
        <p className="info">(Separate ingredients with commas)</p>
      </div>
    </div>
  );
};

export default HomeComponent;
