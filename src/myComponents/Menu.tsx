import {Link} from "react-router-dom"
import Logo from "../imgs/logo.png"


export default function Menu(){
    return(
        <div className="menu w-full bg-menu flex justify-center">
            <div className="flex w-1/2 justify-center place-items-center">
                <Link to="/"><img src={Logo} className="flex h-16 place-items-center p-1"/></Link>
            </div>
            <div className="w-1/2 flex justify-center">
                <Link to="/" className="flex text-white hover:underline menu-button h-full p-3 place-items-center">Home</Link>
                <Link to="/evenimente" className="flex text-white hover:underline menu-button h-full p-3 place-items-center">Evenimente</Link>
                <Link to="/" className="flex text-white hover:underline menu-button h-full p-3 place-items-center">Calendar</Link>
            </div>
        </div>
    )
}