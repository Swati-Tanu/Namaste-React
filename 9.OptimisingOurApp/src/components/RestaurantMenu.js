import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestuarantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const [resInfo, setResInfo] = useRestaurantMenu(resId);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        
        const json = await data.json();

        // console.log(json)

        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwo} = resInfo?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;

    // console.log(resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);

    //  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(itemCards)

    return  (
        <div className="menu">
            {/* <h1>Name of the Resturant</h1> */}
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwo}
            </p>
            <h2>Menu</h2>
            <ul>
                 {/* {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} -{" RS."} {(item?.card?.info?.price) / 100 || (item?.card?.info?.defaultPrice) / 100 }</li>
                )} */}
                <li>Biryani</li>
                {/* <li>{itemCards[0].card.info.name}</li> */}

                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestuarantMenu;