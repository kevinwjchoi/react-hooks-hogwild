import React, {useState} from "react";

function Filter({ greasedOn, handleIsGreased }){




return (
    <>
        <button value="filter" onClick={handleIsGreased}>{greasedOn ? 'Greased Filter is On' : 'Greased Filter is Off'} </button>
        
    </>
)
}

export default Filter;