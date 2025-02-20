import Event from "../models/event.model.js";

export const createEvent = async(req, res, next)=>{
    try{
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    }
    catch(error){
        console.error(error);
        res.status(400).json(error);
    }
};

export const getAllEvents = async(req, res, next)=>{
    try{
        const allEvents = await Event.find().sort({eventName : 1});
        res.status(200).json(allEvents);
    }
    catch(error){
        console.error(error);
        res.status(400).json(error);
    }
};

export const getEventById = async(req, res, next)=>{
    const {id} = req.params
    try{
        const oneEvent = await Event.findById(id);
        res.status(200).json(oneEvent);
    }
    catch(error){
        console.error(error);
        res.status(400).json(error);
    }
};

export const deleteEventById = async(req, res, next)=>{
    const {id} = req.params
    try{
        const deletedEvent = await Event.findByIdAndDelete(id);
        res.status(200).json(deletedEvent);
    }
    catch(error){
        console.error(error);
        res.status(400).json(error);
    }
};

export const updateEventById = async(req, res, next)=>{
    const {id} = req.params
    const OPTIONS = {
        new : false,
        runValidators : true,
    }
    try{
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, OPTIONS);
        res.status(200).json(updatedEvent);
    }
    catch(error){
        console.error(error);
        res.status(400).json(error);
    }
};