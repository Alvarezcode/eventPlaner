import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEventById } from "../services/EventService"
import { Link } from "react-router-dom"

export const EventDetails = ()=>{ //set header text from props
    const {id} = useParams()
    const [eventData, setEventData] = useState({})

    useEffect(()=>{
        getEventById(id)
            .then(RES => {
                setEventData(RES)
            })
            .catch(error => console.error(`EventDetails.jsx ERROR: ${error} `))
    },[id]) //setHeaderTxt needs to be rendered 

    return(<>
        <h2> {eventData.eventType} </h2>
        <p>Event Name: {eventData.eventName}</p>
        <p>When: {eventData.eventDate} at {eventData.eventTime} </p>
        <p>Whats Happening: {eventData.description} </p>
        <Link className="btn btn-warning" to={`/${id}/update`} >Update Event</Link>
    </>)
}