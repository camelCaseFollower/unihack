import DashboardMenu from "./DashboardMenu"
import MyProfile from "./myProfile"
import EventForm from "./eventForm"
import MyEvents from "./myEvents"

export default function Dashboard(){
    return(
        <div className="flex w-full h-screen justify-center my-20">
            <div className="flex w-3/4 bg-white">
                <DashboardMenu />
                {/*<MyProfile NAME="Facultatea X" IMAGE="/imgs/post1.jpg" EMAIL="example@gmail.com" JUDET="Bucuresti"/>*/}
                {/*<EventForm />*/}
                <MyEvents />
            </div>
        </div>
    )
}