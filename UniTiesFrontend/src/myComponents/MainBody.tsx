import Header from "../imgs/header.jpg"
import Card from "./Card"
import ContactForm from "./ContactForm"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import { fetchEvents, Event } from "../services/events"

export default function MainBody() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEvents();
                if (data.length >= 3)
                    setEvents(data.slice(-3));
                else setEvents(data);

            } catch (error) {
                console.log("events error");
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="flex flex-wrap mainScreen h-screen w-full">
                <div className="header flex w-full h-2/3 bg-header justify-center">
                    <img src={Header} className="h-full"></img>
                </div> {/*----- here header div ends ----- */}
                <div className="body flex flex-wrap w-full justify-center">
                    <div className="posts flex flex-wrap w-1/2 m-28">
                        <div className="post w-full m-2 bg-black rounded-3xl overflow-hidden"><img alt="" src="imgs/example1.jpg" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" /></div>
                        <div className="post w-2/3 m-1 bg-black rounded-3xl overflow-hidden"><img src="imgs/example2.jpg" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" /></div>
                        <div className="post grow w-1/4 m-1 rounded-3xl">
                            <div className="subpost bg-black grow rounded-3xl overflow-hidden"><img src="imgs/example1.jpg" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" /></div>
                            <div className="subpost bg-black grow rounded-3xl overflow-hidden"><img src="imgs/example3.jpg" className="w-full h-full object-cover hover:scale-110 transition-all duration-700" /></div>
                        </div>{/*----- posts Sub Divs ends here ----- */}
                    </div>{/*----- here posts div ends -----*/}
                    <div className="flex flex-wrap w-full justify-center my-28">
                        {events.map((e) =>
                            <Card TITLE={e.name} IMAGE={e.imageUrl} SITE="#" BIO={e.description} />
                        )}
                    </div>
                    <ContactForm />
                </div>{/*----- here body div ends -----*/}
                <Footer />
            </div>{/*----- here mainScreen div ends -----*/}
        </>
    )
}