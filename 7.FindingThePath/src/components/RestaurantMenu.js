import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&restaurantId="236434"&submitAction=ENTER');
        
        const json = await data.json();

        // console.log(json)

        setResInfo(json.data);
    }

    // if(resInfo === null) return <Shimmer/>;

    // const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    return (resInfo === null) ? (
        <Shimmer/> 
        ) : (
        <div className="menu">
            <h1>Name of the Resturant</h1>
            {/* <h1>{name}</h1> */}
            {/* <h3>{cuisines.join(",")}</h3> */}
            {/* <h3>{costForTwoMessage}</h3> */}
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestuarantMenu;