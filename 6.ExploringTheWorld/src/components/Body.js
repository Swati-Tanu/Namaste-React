import RestaurantCard from "./Restraurant";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//Body Component
const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState(resList || [])
  
  //The two parameter in useEffect are first one is a callback function and a dependency array.

  useEffect(() => {
    /*This callback function is called after the component renders*/
    // console.log("useEffect Called")
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json)
      console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

if(listOfRestraunt.length === 0) {
  return Shimmer
  // <h1>Loading...</h1>
}

  return (
    <div className="body">
      <div className="fitler">
        <button className="filter-btn" onClick={()=>{
          // console.log("Button Clicked!")
          const filteredList = listOfRestraunt.filter((res)=> res.data.avgRating > 4);
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