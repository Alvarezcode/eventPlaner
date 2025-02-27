import { useEffect, useState } from "react"
import { getAllEvents } from "../services/EventService"
import { DisplayEvents } from "../components/DisplayEvents"


export const EventViews = ()=> { //bring in header text through props
    const [eventList, setEventList] = useState([])
    useEffect(()=>{
        getAllEvents()
            .then(RES =>{
                setEventList(RES)
            })
            .catch(error => console.error("EventView.jsx ERROR:", error))
    },[])

    return(<>
        <DisplayEvents eventList={eventList} />
    
    </>)
}