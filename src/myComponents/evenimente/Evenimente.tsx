import Search from "./Search"
import EventThumbnail from "./EventThumbnail"

export default function Evenimente(){
    return(
        <div className="flex flex-wrap justify-center">
            <Search />
            <div className="flex flex-wrap w-2/3">
                <EventThumbnail NAME="Hackathon Unihack 2023" IMAGE="imgs/post1.jpg" FACULTATE="UPB" />
                <EventThumbnail NAME="HackItAll 2023" IMAGE="imgs/post2.jpg" FACULTATE="AC" />
                <EventThumbnail NAME="CCC Contest" IMAGE="imgs/post3.jpg" FACULTATE="FILS" />
            </div>
        </div>
    )
}