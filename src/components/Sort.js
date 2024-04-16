import React, {useState} from "react";


function Sort({handleSelectSort, selectedOption, handleFilterForNames}){


return (
<>
    <select value={selectedOption} onChange={handleSelectSort}>
        <option value="options" >Sort By</option>
        <option value="Sort by name" onClick={handleFilterForNames} >Name</option>
        <option value="Sort by weight" >Weight</option>
    </select>
</>
)}

export default Sort

