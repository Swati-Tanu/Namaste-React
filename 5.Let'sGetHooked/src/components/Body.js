import RestaurantCard from "./Restraurant";
import resList from "../utils/mockData";

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="fitler">
        <button className="filter-btn" onClick={()=>{
          console.log("Button Clicked!")
          resList = resList.filter((res)=>res.data.avgRating > 4);
          console.log(resList);
        }}>
          Top Rated Restraurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;