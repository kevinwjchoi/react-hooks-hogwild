import React, {useState} from "react";
import Nav from "./Nav";
import Sort from "./Sort"
import TileList from "./TileList";
import Filter from "./Filter";

import hogsList from "../porkers_data";

function App() {
const [hogs, setHogsList] = useState(hogsList)
const [greasedOn, setGreasedOn] = useState(false);
const [nameSortOn, setNameSortOn] = useState(false);
const [selectedOption, setSelectedOption] = useState('');


//This is filtering for greasedOn/Off hogs
// takes hog and filters for 
const greasedHogs = hogs.filter((hog) => {
	// if greasedOn is false -> return true = return that hog
	if (greasedOn === false) return true
	//if greased on is true, only return hogs that hog.greased === true
	return hog.greased === true; 
	
});

function handleIsGreased(){
	//this negates the previous state (greaseOn) 
    setGreasedOn(greasedOn => !greasedOn)
    }






// This is sorting hogs based on name. 
const alphabeticalHogs = [...hogs].sort((a,b) => {

	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1; // a should come before b
    } else if (nameA > nameB) {
      return 1; // a should come after b
    } else {
      return 0; // a and b are equal in terms of sorting
    }

  });

  const weightedHogs = [...hogs].sort((a,b) => {

	const weightA = a.weight;
	const weightB = b.weight;

	if (weightA < weightB) {
		return -1; // Return a negative value if weightA is less than weightB
	  } else if (weightA > weightB) {
		return 1; // Return a positive value if weightA is greater than weightB
	  } else {
		return 0; // Return 0 if weightA is equal to weightB
	  }

  });

 
function handleSelectSort(event){
	console.log(event.target.value)
	setSelectedOption(event.target.value);
	if(event.target.value === "options") return setHogsList(hogsList);

	else if (event.target.value === "Sort by name") return setHogsList(alphabeticalHogs);

	else if (event.target.value === "Sort by weight") return setHogsList(weightedHogs);
	
	
}

function handleFilterForNames(){
 setNameSortOn(nameSortOn => !nameSortOn)

}





	return (
		<div className="App">
			<Nav />
			<Sort handleFilterForNames={handleFilterForNames} selectedOption={selectedOption}  handleSelectSort={handleSelectSort}/>	
			<Filter setHogsList={setHogsList} greasedOn={greasedOn} setGreasedOn={setGreasedOn} handleIsGreased={handleIsGreased}/>
			<TileList hogs={greasedHogs}/>	
			
		</div>
	);
}

export default App;
