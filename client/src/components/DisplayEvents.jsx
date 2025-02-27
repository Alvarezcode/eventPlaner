import { Link } from "react-router-dom"


export const DisplayEvents = ({eventList})=>{ //might add a delete button

    return(<>
    {
        eventList.map(({eventType, eventName, eventDate, eventTime, numberOfPeople, _id})=>(
            <div key={_id}>
                <Link to={`/${_id}`} >
                EventType: {eventType}
                </Link>
                Event Name: {eventName}
                Event Date: {eventDate}
                Event Time: {eventTime}
                How many People: {numberOfPeople}
            </div>
        ))


    }
    
    </>)
}