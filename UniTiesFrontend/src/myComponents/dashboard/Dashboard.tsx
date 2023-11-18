import DashboardMenu from "./DashboardMenu"
import * as React from "react"
import MyProfile from "./myProfile"
import EventForm from "./eventForm"
import MyEvents from "./myEvents"

export default function Dashboard(){
    const [dashboard,setDashboard] = React.useState("myProfile");
    const handleClick = (STATE: string ) => {
        setDashboard(STATE);
        return 
      };
    return(
        <div className="flex w-full min-h-screen justify-center my-20">
            <div className="flex w-3/4 bg-white">
            <div className="flex flex-wrap content-start w-1/4 h-full shadow">
                <button className="w-full p-8 buttons-blue-hover hover:text-white" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick("myProfile")}>My profile</button>
                <button className="w-full p-8 buttons-blue-hover hover:text-white" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick("myEvents")}>My events</button>
                <button className="w-full p-8 buttons-blue-hover hover:text-white" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick("createEvent")}>Create event</button>
            </div>      
                {dashboard == "myProfile" && <MyProfile NAME="Facultatea X" IMAGE="/imgs/post1.jpg" EMAIL="example@gmail.com" JUDET="Bucuresti"/>}
                {dashboard == "createEvent" && <EventForm />}
                {dashboard == "myEvents" && <MyEvents />}
            </div>
        </div>
    )
}