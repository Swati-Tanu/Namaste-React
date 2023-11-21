import RestaurantCard from "./Restraurant";
import resList from "../utils/mockData";
import { useState } from "react";

//Body Component
const Body = () => {

  //State Variable - Super powerful variable using Hooks
  const [listOfRestraunt, setListOfRestraunt] = useState(resList)
  
  //The above line is same as the below:
  // const arr = useState(resList)
  // const [listOfRestraunt, setListOfRestraunt] = arr;

  return (
    <div className="body">
      <div className="fitler">
        <button className="filter-btn" onClick={()=>{
          // console.log("Button Clicked!")
          const filteredList = listOfRestraunt.filter((res)=>res.data.avgRating > 4);
          setListOfRestraunt(filteredList)
          // console.log(filteredList);
        }}>
          Top Rated Restraurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunt.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;