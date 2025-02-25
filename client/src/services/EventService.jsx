import axios from "axios"

const EVENT_INSTANCE = axios.create({
    baseURL: `http://localhost:8000/event`
})

export const createEvent = async (data)=>{
    try{
        const RES = await EVENT_INSTANCE.post("/", data)
        return RES.data
    }
    catch(error){throw error.response.data.errors}
}

export const getAllEvents = async ()=>{
    try{
        const RES = await EVENT_INSTANCE.get("/")
        return RES.data
    }
    catch(error){throw error.response.data.errors}
}

export const getEventById = async id =>{
    try{
        const RES = await EVENT_INSTANCE.get(`/${id}`)
        return RES.data
    }
    catch(error){throw error.response.data.errors}
}

export const deleteEventById = async id =>{
    try{
        const RES = await EVENT_INSTANCE.delete(`/${id}`)
        return RES.data
    }
    catch(error){throw error.response.data.errors}
}

export const updateEventById = async data =>{
    try{
        const RES = await EVENT_INSTANCE.put(`/${data._id}`, data)
        return RES.data
    }
    catch(error){throw error.response.data.errors}
}



