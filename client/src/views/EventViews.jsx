import { useEffect, useState } from "react"
import { deleteEventById, getAllEvents } from "../services/EventService"
import { DisplayEvents } from "../components/DisplayEvents"


export const EventViews = ({setHeaderTxt})=> {
    const [eventList, setEventList] = useState([])

    const deleteEvent = (id) =>{
        deleteEventById(id)
        .then(()=>{
            setEventList(prev => prev.filter(event => event._id !== id))
        })
        .catch(error =>console.error("DisplayEvents.jsx ERROR:", error))
    }

    useEffect(()=>{
        getAllEvents()
            .then(RES =>{
                setEventList(RES)
                setHeaderTxt("Events @Crusiers")
            })
            .catch(error => console.error("EventView.jsx ERROR:", error))
    },[setHeaderTxt])

    return(<>
        <DisplayEvents eventList={eventList} deleteEvent={deleteEvent}  />
    </>)
}