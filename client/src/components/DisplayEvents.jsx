import { Link } from "react-router-dom"


export const DisplayEvents = ({ eventList, deleteEvent }) => {

    return (<>

        <table className="table table-striped table-hover table-bordered border-primary">
            <thead>
                <tr>
                    <th>Event Type</th>
                    <th>Event Name</th>
                    <th>Event Date</th>
                    <th>Event Time</th>
                    <th>Number of People</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {eventList.map(({ eventType, eventName, eventDate, eventTime, numberOfPeople, _id }) => (
                    <tr key={_id}>
                        <td>
                            <Link to={`/${_id}`}>{eventType}</Link>
                        </td>
                        <td>{eventName}</td>
                        <td>{eventDate}</td>
                        <td>{eventTime}</td>
                        <td>{numberOfPeople}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteEvent(_id)}>
                                Cancel Event
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}