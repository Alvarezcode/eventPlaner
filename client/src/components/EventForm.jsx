import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createEvent, getEventById, updateEventById } from "../services/EventService"


const DEFAULT_FORM_DATA = {
    eventType: "",
    eventName: "",
    eventDate: "",
    eventTime: "",
    numberOfPeople: 0,
    image: "",
    description: "",
}

export const EventForm = ({ setHeaderTxt }) => {
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
    const [errors, setErrors] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getEventById(id)
                .then(RES => {
                    setFormData(RES)
                    setHeaderTxt(`Update Event: ${RES.eventName}`)
                })
                .catch(error => console.error("EventForm.jsx ERROR:", error))
        }
        else {
            setHeaderTxt(" Schedule New Event")
            setFormData(DEFAULT_FORM_DATA)
        }
    }, [id, setHeaderTxt])


    const updateFormData = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const submissionFunction = id ? updateEventById : createEvent
        submissionFunction(formData)
            .then(() => {
                navigate("/")
            })
            .catch(errors => setErrors(errors))
    }
    return (<>
        <form className="form" onSubmit={handleSubmit} >
            <div className="mb-3">
                <label className="form-label">
                    Event Type:
                    <select className="form-select" name="eventType" value={formData.eventType} onChange={updateFormData} >
                        <option value={"Benefit"}>Benefit</option>
                        <option value={"Birthday"}>Birthday</option>
                        <option value={"Watch Party"}>Watch Party</option>
                        <option value={"Fund Raiser"}>Fund Raiser</option>
                        <option value={"Tournament"}>Tournament</option>
                    </select>
                    {errors.eventType && <p className="error-text" >{errors.eventType.message}</p>}
                </label>
            </div>
            <div className="mb-3" >
                <label className="form-label">
                    Event Date:
                    <input
                        className="form-control"
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={updateFormData}
                    />
                    {errors.eventDate && <p className="error-text" >{errors.eventDate.message}</p>}
                </label>
            </div>
            <div className="mb-3" >
                <label className="form-label">
                    Event Name:
                    <input
                        className="form-control"
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={updateFormData}
                    />
                    {errors.eventName && <p className="error-text" >{errors.eventName.message}</p>}
                </label>
            </div>
            <div className="mb-3" >
                <label className="form-label">
                    Event Time:
                    <input
                        className="form-control"
                        type="text"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={updateFormData}
                    />
                    {errors.eventTime && <p className="error-text" >{errors.eventTime.message}</p>}
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Number of people:
                    <input
                        className="form-control"
                        type="number"
                        name="numberOfPeople"
                        value={formData.numberOfPeople}
                        onChange={updateFormData}
                    />
                    {errors.numberOfPeople && <p className="error-text" >{errors.numberOfPeople.message}</p>}
                </label>
            </div>
            <div className="mb-3" >
                <label className="form-label">
                    Image URL:
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={updateFormData}
                    />
                    {errors.image && <p className="error-text" >{errors.image.message}</p>}
                </label>
            </div>
            <div className="mb-3" >
                <label className="form-label">
                    Description:
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={updateFormData}
                    />
                    {errors.description && <p className="error-text" >{errors.description.message}</p>}
                </label>
            </div>
            <input className="btn btn-success" type="submit" value={id ? "Update Event" : "Create Event"} />
        </form>


    </>)
}