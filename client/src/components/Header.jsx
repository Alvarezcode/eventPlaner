import { Link } from "react-router-dom"

export const Header = ({headerTxt})=>{

    return(<>
        <h1> {headerTxt} </h1>
        <Link className="btn btn-primary" to="/" >Home</Link>
        <Link className="btn btn-info" to="/event" >Schedule Event</Link>
    </>)
}