import {Link} from "react-router-dom"
import Logo from "../imgs/logo3.png"


export default function Menu(){
    return(
        <div className="menu w-full bg-menu flex justify-center">
            <div className="flex w-1/2 justify-center px-6 place-items-center">
                <Link to="/"><img src={Logo} className="flex h-16 place-items-center"/></Link>
            </div>
            <div className="w-1/2 flex justify-center px-6">
                <Link to="/" className="flex text-white hover:underline menu-button h-full p-5 text-lg place-items-center">Home</Link>
                <Link to="/evenimente" className="flex text-white hover:underline menu-button h-full p-5 text-lg place-items-center">Evenimente</Link>
            </div>
        </div>
    )
}