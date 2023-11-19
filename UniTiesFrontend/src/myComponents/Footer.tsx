import Logo from "../imgs/logo.png"
import Copyright from "../imgs/copyright.svg"
import Instagram from "../imgs/instagram.svg"
import Facebook from "../imgs/facebook.svg"
import Discord from "../imgs/discord.svg"
import {Link} from "react-router-dom"

export default function Footer(){
    return(
        <div className="flex flex-wrap bg-neutral-700 w-full justify-center">
            <div className="flex flex-wrap flex-col p-4 w-2/3 lg:w-1/3 justify-center lg:justify-start content-center">
                <img className="w-3/4" src={Logo}></img>
                <div className="flex flex-wrap justify-center">
                    <img className="h-6 mr-1"src={Copyright}></img>
                    <p className="text-white">Unities CES 2023</p>
                </div>
            </div>{/* Left side of footer */}
            <div className="flex w-full lg:w-2/3">
                <div className="flex flex-col w-full lg:w-1/3 text-xl p-8">
                    <h2 className="text-white font-bold">Contact</h2>
                    <p className="text-white text-lg">Piața Consiliul Europei 2D,<br/> 300627 Timișoara, Romania</p>
                    <a href="" className="text-white text-lg">contact@unities.ro</a>
                    <p className="text-white text-lg">+40 0712 277 132</p>
                </div>
                <div className="flex flex-wrap w-full lg:w-2/3 p-8">
                    <h2 className="text-xl font-bold text-white w-full  mb-1">Retele</h2>
                    <div className="flex flex-col justify-items-center items-center">
                        <Link to=""><img src={Instagram} className="w-10 hover:translate-x-2 transition-all"></img></Link>
                        <Link to=""><img src={Facebook} className="w-14 hover:translate-x-2 transition-all"></img></Link>
                        <Link to=""><img src={Discord} className="w-14 hover:translate-x-2 transition-all"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}