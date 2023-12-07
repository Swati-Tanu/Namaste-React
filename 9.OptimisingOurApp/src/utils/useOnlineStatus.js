import {useEffect, useState} from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
// Check if user is online or offline
    useEffect (() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        });

         window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, []);

    // Boolean value
    return onlineStatus;
}

export default useOnlineStatus;