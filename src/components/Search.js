import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [inputUser, setInputUser] = useState("");
  const handleChange = event => {
    setInputUser(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    props.search(inputUser);
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                value={inputUser}
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleChange}
              />
              <SearchButton> </SearchButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
