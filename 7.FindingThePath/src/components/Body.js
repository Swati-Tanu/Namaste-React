import RestaurantCard from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//Body Component
const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("")
  
  //The two parameter in useEffect are first one is a callback function and a dependency array.
  useEffect(() => {
    /*This callback function is called after the component renders*/
    // console.log("useEffect Called")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
      );
      const json = await data.json();
      // console.log(json)
      console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      setlistOfRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }

  //Conditional Rendering
  // if(listOfRestaurant.length === 0) {
  //  return <Shimmer/>
  //  // <h1>Loading...</h1>
  // }

  return listOfRestaurant === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">  
      <div className="search">
        <input type="text" className="search-box" value={searchText} 
        /*Since nothing can be typed in search bar/ any change is not going to work inside Component without using useState so we are using it here.*/
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
          // console.log("Button Clicked!")
          const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating > 4.5);
          setFilteredRestaurant(filteredList)
          // console.log(filteredList);
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

