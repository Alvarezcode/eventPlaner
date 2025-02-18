import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

export const dbConnect = async ()=>{
    try{
        await connect(MONGODB_URI, {dbName: "" }); //make database name
        console.log("PINGED YOUR DEPLOYMENT YOU SUCCESSFULLY CONNECTED MONGO DB!!!!! ");   
    }
    catch(error){console.log("DB CONNECTION FAILED ERROR:", error)}
}