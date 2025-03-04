import { useEffect, useState } from "react"
import { deleteEventById, getAllEvents } from "../services/EventService"
import { DisplayEvents } from "../components/DisplayEvents"


export const EventViews = ({ setHeaderTxt }) => {
    const [eventList, setEventList] = useState([]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(dateString).toLocaleDateString('en-US', options)
    };
    // const formatTime = (timeString)=>{
    //     const options = { hour: "numeric", minute: "numeric", hour12: true};
    //     return new Date(timeString).toLocaleTimeString('en-US', options)
    // }

    const deleteEvent = (id) => {
        deleteEventById(id)
            .then(() => {
                setEventList(prev => prev.filter(event => event._id !== id))
            })
            .catch(error => console.error("DisplayEvents.jsx ERROR:", error))
    }

    useEffect(() => {
        getAllEvents()
            .then(RES => {
                const formattedEvents = RES.map(event => ({
                    ...event,
                    eventDate: formatDate(event.eventDate),
                }));
                setEventList(formattedEvents);
                setHeaderTxt("Events @Crusiers");
            })
            .catch(error => console.error("EventView.jsx ERROR:", error))
    }, [setHeaderTxt])

    return (<>
        <DisplayEvents eventList={eventList} deleteEvent={deleteEvent} />
    </>)
}