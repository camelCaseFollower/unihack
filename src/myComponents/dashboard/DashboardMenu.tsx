export default function DashboardMenu(){
    return(
    <div className="flex flex-wrap content-start w-1/4 h-full shadow">
        <button className="w-full p-8 buttons-blue-hover hover:text-white">My profile</button>
        <button className="w-full p-8 buttons-blue-hover hover:text-white">My events</button>
        <button className="w-full p-8 buttons-blue-hover hover:text-white">Create event</button>
    </div>
    )
}