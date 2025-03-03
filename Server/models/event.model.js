import { model, Schema } from "mongoose"

const EventSchema = new Schema({
    eventType : {
        type : String,
        required : [true, "You must pick a type" ],
        enum : ["Benefit", "Birthday", "Watch Party", "Fund Raiser", "Tournament" ],
    },
    eventName : {
        type : String,
        required : [true, "Event must have a name"],
        minlength : [5, "eventName must be at least 5 characters long."],
        maxlength : [50, "Event must be no longer than 50 characters."],
    },
    eventDate : {
        type : String,
        required : [true, "Your event must have a date and time"],
    },
    eventTime : {
        type : String,
        default : "12:00 pm",
    },
    numberOfPeople : {
        type : Number,
        required : [true, "How many people will be at your event"],
        max : [200, "The venue has max occupancy of 200"],
        default : 0,
    },
    image : {
        type : String,
    },
    description : {
        type : String,
        minlength : [3, "Describe your event with at least 3 characters."],
        maxlength : [255, "Describe your event in less than 255 characters."],

    },

}, 
    { timestamps : true } 
);

const Event = model("Event", EventSchema );
export default Event;