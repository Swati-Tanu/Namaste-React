import RestaurantCard from "./Restaurant";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//Body Component
const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([])
  // const [filteredResturant, setFilteredResturant] = useState([])
  // const [searchText, setSearchText] = useState("")
  
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
      setListOfRestraunt(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
      // setFilteredResturant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  //Conditional Rendering
  // if(listOfRestraunt.length === 0) {
  //  return <Shimmer/>
  //  // <h1>Loading...</h1>
  // }

  return listOfRestraunt === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="fitler">    
        <button className="filter-btn" onClick={()=>{
          // console.log("Button Clicked!")
          const filteredList = listOfRestraunt.filter((res)=>res.info.avgRating > 4.5);
          setListOfRestraunt(filteredList)
          // console.log(filteredList);
        }}>
          Top Rated Restraurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunt.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
  
export default Body;

// return listOfRestraunt === 0 ? <Shimmer/> :(
//     <div className="body">
//       {/* <div className="fitler">
//         <div className="search">
//           <input type="text" className="search-box" value={searchText} onChange={(e) => {
//             setSearchText(e.target.value);
//           }}/>
//           <button
//           onClick={() => {
//             console.log(searchText)
//             const filteredResturant = listOfRestraunt.filter((res)=>{
//               res.data.name.toLowerCase().includes() === searchText.toLowerCase()
//             })

//             setFilteredResturant(filteredResturant);

//           }}>Search</button>
//         </div>
//         <button className="filter-btn" onClick={()=>{
//           // console.log("Button Clicked!")
//           const filteredList = listOfRestraunt.filter((res)=> res.data.avgRating > 4);
//           setListOfRestraunt(filteredList)
//           // console.log(filteredList);
//         }}>
//           Top Rated Restaurant
//         </button>
//       </div> */}
//       <div className="res-container">
//          {listOfRestraunt.map((restaurant) =>
//         restaurant (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         )
//         )}
//       </div>
//     </div>
//   );
// };
