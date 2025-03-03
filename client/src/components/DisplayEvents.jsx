import { Link } from "react-router-dom"


export const DisplayEvents = ({eventList, deleteEvent})=>{

    return(<>
    {
        eventList.map(({eventType, eventName, eventDate, eventTime, numberOfPeople, _id})=>(
            <div key={_id}>
                EventType:
                <Link to={`/${_id}`} >
                    {eventType}
                </Link>
                Event Name: {eventName}
                Event Date: {eventDate}
                Event Time: {eventTime}
                How many People are Coming: {numberOfPeople}
                <button className="btn btn-danger" onClick={()=> deleteEvent(_id)} >Cancel Event</button>
            </div>
        ))
    }
    
    </>)
}