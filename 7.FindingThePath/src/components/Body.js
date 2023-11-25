import RestaurantCard from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_URL} from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      const transver = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
      setlistOfRestaurant(transver)
      setFilteredRestaurant(transver)
  }

  return listOfRestaurant.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">  
      <div className="search">
        <input type="text" className="search-box" value={searchText} 
        onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
        <button
          onClick={() => {
            console.log(searchText);
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>

        </div>  
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating > 4.5);
          setFilteredRestaurant(filteredList)
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
  
export default Body;

