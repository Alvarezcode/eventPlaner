import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEventById } from "../services/EventService"
import { Link } from "react-router-dom"

export const EventDetails = ({ setHeaderTxt }) => {
    const { id } = useParams()
    const [eventData, setEventData] = useState({})

    useEffect(() => {
        getEventById(id)
            .then(RES => {
                setEventData(RES)
                setHeaderTxt(RES.eventName)
            })
            .catch(error => console.error(`EventDetails.jsx ERROR: ${error} `))
    }, [id, setHeaderTxt])

    return (<>
        <h2> {eventData.eventType} </h2>
        <img src={eventData.image} alt={`${eventData.eventName}`} />
        <p>Your Invited to: {eventData.eventName}</p>
        <p>When: {eventData.eventDate} at {eventData.eventTime} </p>
        <p>Whats Happening: {eventData.description} </p>
        <Link className="btn btn-warning" to={`/${id}/update`} >Update Event</Link>
    </>)
}