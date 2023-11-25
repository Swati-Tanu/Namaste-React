import {CDN_URL} from "../utils/constants" //Using destructuring since using named export in constant.js

//Inline css in React (Not recommended)
const styleCard = {
    backgroundColor: "#f0f0f0"
}

//Restraurant Component
// ({resName,cuisine}): Destructuring the props on the fly.
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
    } = resData?.info;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;