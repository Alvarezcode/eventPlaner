import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createEvent, getEventById, updateEventById } from "../services/EventService"


const DEFAULT_FORM_DATA ={
    eventType: "",
    eventName: "",
    eventDate: "",
    eventTime: "",
    numberOfPeople: 0,
    image: "",
    description: "",
}

export const EventForm = ({setHeaderTxt})=>{
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
    const [errors, setErrors] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const formatDate = (dateString)=>{
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(dateString).toLocaleDateString('en-US', options)
    };

    useEffect(()=>{
        if(id){
            getEventById(id)
                .then(RES =>{
                    setFormData({
                        ...RES,
                        eventDate: formatDate(RES.eventDate)
                    })
                    setHeaderTxt(`Update Event: ${RES.eventName}`)
                })
                .catch(error => console.error("EventForm.jsx ERROR:", error))
        }
        else{
            setHeaderTxt("New Event")
            setFormData(DEFAULT_FORM_DATA)
        }
    },[id, setHeaderTxt])


    const updateFormData = e =>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: name === "eventDate" ? formatDate(value) : value }))
    }

    const handleSubmit = e =>{
        e.preventDefault()
        const submissionFunction = id ? updateEventById : createEvent
        submissionFunction(formData)
            .then(()=>{
                navigate("/")
            })
            .catch(errors => setErrors(errors))
    }
    return(<>
            <form onSubmit={handleSubmit} >
                <label className="form-label">
                    Event Type:
                    <select name="eventType" value={formData.eventType} onChange={updateFormData} >
                        <option value={"Benefit"}>Benefit</option>
                        <option value={"Birthday"}>Birthday</option>
                        <option value={"Watch Party"}>Watch Party</option>
                        <option value={"Fund Raiser"}>Fund Raiser</option>
                        <option value={"Tournament"}>Tournament</option>
                    </select>
                    {errors.eventType && <p>{errors.eventType.message}</p> }
                </label>
                <label className="form-label">
                    Event Name:
                    <input 
                        className="form-control"
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={updateFormData} 
                    />
                    {errors.eventName && <p>{errors.eventName.message}</p> }
                </label>
                <label className="form-label">
                    Event Date:
                    <input 
                        className="form-control"
                        type="Date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={updateFormData} 
                    />
                    {errors.eventDate && <p>{errors.eventDate.message}</p> }
                </label>
                <label className="form-label">
                    Event Time:
                    <input 
                        className="form-control"
                        type="text"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={updateFormData} 
                    />
                    {errors.eventName && <p>{errors.eventName.message}</p> }
                </label>
                <label className="form-label">
                    Number of people:
                    <input 
                        className="form-control"
                        type="number"
                        name="numberOfPeople"
                        value={formData.numberOfPeople}
                        onChange={updateFormData} 
                    />
                    {errors.numberOfPeople && <p>{errors.numberOfPeople.message}</p> }
                </label>
                <label className="form-label">
                    Image URL:
                    <input 
                        className="form-control"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={updateFormData} 
                    />
                    {errors.image && <p>{errors.image.message}</p> }
                </label>
                <label className="form-label">
                    Description:
                    <input 
                        type="text"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={updateFormData} 
                    />
                    {errors.description && <p>{errors.description.message}</p> }
                </label>
                <input className="btn btn-success" type="submit" value={id ? "Update Event" : "Create Event"} />
            </form>
    
    
    </>)
}