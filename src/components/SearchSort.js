import React from "react";

const SearchAndSort = ({
    lastNameAsc,
    lastNameDesc
}) => {
    return(
        <div className="button-container">
            <button className="btn btn-bluegreen" onClick={lastNameAsc}>
        Last Name: A - Z
             </button>
             <button className="btn btn-greenblue" onClick={lastNameDesc}>
        Last Name: Z - A
        </button>
        </div>
    )
}
export default SearchAndSort;