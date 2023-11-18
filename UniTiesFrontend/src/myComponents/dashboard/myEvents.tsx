import EventThumbnail from "../evenimente/EventThumbnail"

export default function MyEvents(){
    return(
        <div className="w-3/4 flex flex-wrap p-12 content-start">
            <h1 className="text-4xl font-bold w-full text-center mb-12">Evenimentele tale</h1>
            <EventThumbnail key="1" NAME="Hackathon Unihack 2023" IMAGE="imgs/post1.jpg" FACULTATE="UPB" />
            <EventThumbnail key="2" NAME="HackItAll 2023" IMAGE="imgs/post2.jpg" FACULTATE="AC" />
            <EventThumbnail key="3" NAME="CCC Contest" IMAGE="imgs/post3.jpg" FACULTATE="FILS" />
        </div>
    )
}