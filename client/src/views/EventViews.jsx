import { useEffect, useState } from "react"
import { getAllEvents } from "../services/EventService"
import { DisplayEvents } from "../components/DisplayEvents"


export const EventViews = ({setHeaderTxt})=> { //bring in header text through props
    const [eventList, setEventList] = useState([])
    useEffect(()=>{
        getAllEvents()
            .then(RES =>{
                setEventList(RES)
                setHeaderTxt("Events @Crusiers")
            })
            .catch(error => console.error("EventView.jsx ERROR:", error))
    },[setHeaderTxt])

    return(<>
        <DisplayEvents eventList={eventList} />
    
    </>)
}