import express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import { dbConnect } from "./config/mongoose.config.js";
import { eventRouter } from "./routes/event.route.js";



const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
const PORT = process.env.PORT;
app.use("/event", eventRouter);
dbConnect();


app.listen(PORT, ()=>
    console.log(`Listening on port: ${PORT} `)
);