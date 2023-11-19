/*import {Event} from "../../services/events"*/
import EventIcons from "./EventIcons"
import Header from "../../imgs/example1.jpg"
import { useState, useEffect } from "react"
import { fetchEvent, Event } from "../../services/events";
import { useParams } from 'react-router-dom';

interface EventParams {
    id: string; 
  }

export default function PaginaEveniment(){
    const [event, setEvent] = useState<Event>();
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(params.id!)
                const data = await fetchEvent(params.id!);
                console.log(data);
                setEvent(data);
            } catch (error) {
                console.log("events error");
            }

        };

        fetchData();
    }, [params.id]);


    return(
        <div className="flex flex-wrap w-full justify-center">
            <div className="flex flex-wrap w-full content-start justify-center bg-white">
                {/* Title and Date bar div */}
                <div className="flex w-full justify-start shadow px-12 py-3 mb-6">
                    <h1 className="text-2xl font-semibold text-center">Hackathon HBU</h1>
                    <div className="flex bg-yellow-400 rounded-xl self-center items-center text-sm px-2 h-3/4 ml-6 mr-2">16.11.2023</div>
                    <div className="flex bg-yellow-400 rounded-xl self-center items-center text-sm px-2 h-3/4 ml-2">19.11.2023</div>
                </div>
                {/* Title and Date bar div ends */}
                <img src={Header} className="w-1/2 h-1/3 rounded-3xl object-cover mb-6" />
                <EventIcons  organizer="Universitatea Politehnica" category="Tehnologie" county="Bucuresti"/>
                <div className="flex flex-wrap w-1/3">
                    <h2 className="font-bold text-4xl mt-6 mb-4 w-full">Descriere</h2>
                    <p className="EventParagraph py-12">
                        Fun Event! Come and apply!
                    </p>
                </div>
            </div>{/*  */}
        </div>
    )
}