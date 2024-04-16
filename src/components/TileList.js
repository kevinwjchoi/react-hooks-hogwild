import React from "react";
import PigTile from "./PigTile";


const TileList = ({hogs}) => {


    return (
      <div>
        {hogs.map((hog) => (
          <PigTile key={hog.image} name={hog.name} image={hog.image} weight={hog.weight} specialty={hog.specialty} 
          greased={hog.greased} highestMedal={hog["highest medal achieved"]} className="ui grid container"/>
        ))}
      </div>
    );
  };
  
  export default TileList;