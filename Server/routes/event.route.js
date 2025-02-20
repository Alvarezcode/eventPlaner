import { Router } from "express";
import { createEvent, deleteEventById, getAllEvents, getEventById, updateEventById } from "../controllers/event.controller.js";


export const eventRouter = Router()

eventRouter.route("/")
    .post(createEvent)
    .get(getAllEvents)

eventRouter.route("/:id")
    .get(getEventById)
    .put(updateEventById)
    .delete(deleteEventById)