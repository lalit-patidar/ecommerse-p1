import React, { useState } from "react";

const CreatelistSearch = (props) => {
  const [searchData, setSearchData] = useState(false);

  const onHandlechange = (e) => {
    setSearchData(true);
    props.changetext(e.target.value);
  };

  return (
    <>
      <div className="main-search-list">
        <h2 className="search-heading">Find a matching category</h2>

        <div className="input-group-search">
          <div className="form-outline">
            <input
              id="search-input"
              type="search"
              placeholder="Enter a title for your listing (include brand, color, material etc.)"
              className="form-control"
              onChange={onHandlechange}
            />
          </div>

          <button id="search-button" type="button" className="btn btn-primary">
            <i class="bi bi-search"></i>
            <span>Search</span>
          </button>
        </div>
        {props.filtertext.length > 0 ? (
          <div className="searchlist">
            {props.filtertext.map(
              (filters, i) => {
                const result = (
                  <h3>
                    {filters.length > 0 && filters.map(
                        (cat, index) => {
                            const results = (
                              <span className="firstcap">{filters.length > index+1 ? cat.name+' > ' : cat.name}</span>
                            )
                        return results}
                    )}
                  </h3>
                )
                return result}
            )}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default CreatelistSearch;
