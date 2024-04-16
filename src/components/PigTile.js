import React, {useState} from "react";


const PigTile = ({name, image, weight, greased, specialty, highestMedal  }) => {

    const [otherDetails , setOtherDetails] = useState("");
    const [showGreased, setShowGreased] = useState(false);


    //this is other details of the big that show only when the tile is clicked because of setOtherDeatials 
    const otherPigDetails = {
        weight: weight,
        "highest medal achieved": highestMedal,
        specialty: specialty,
        greased: greased,
    }


    //click event that sets the otherPigDetail to otherDetails state. 
    function handlePigTileClick(event){
        console.log(event.target)
        setShowGreased(true);
        setOtherDetails(otherPigDetails);
    }


  return (
    <div className="ui eight wide column" onClick={handlePigTileClick} value={name}>
      <h3>{name}</h3>
      <img src={image}/>
      <p>{otherDetails.weight}</p>
      <p>{otherDetails["highest medal achieved"]}</p>
      <p>{otherDetails.specialty}</p>
      {showGreased && <p>{greased ? 'true' : 'false'}</p>}
    
     
    </div>
  );
};

export default PigTile;