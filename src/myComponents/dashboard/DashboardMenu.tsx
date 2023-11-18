export default function DashboardMenu(props: Function){
    return(
    <div className="flex flex-wrap content-start w-1/4 h-full shadow">
        <button className="w-full p-8 buttons-blue-hover hover:text-white" onClick={props("")}>My profile</button>
        <button className="w-full p-8 buttons-blue-hover hover:text-white" onClick={props("")}>My events</button>
        <button className="w-full p-8 buttons-blue-hover hover:text-white" onClick={props("")}>Create event</button>
    </div>
    )
}