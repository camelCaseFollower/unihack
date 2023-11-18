import Search, { Filters } from "./Search"
import EventThumbnail from "./EventThumbnail"
import { useState, useEffect } from "react"
import { fetchEvents, Event } from "../../services/events";

export default function Evenimente() {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
            } catch (error) {
                console.log("events error");
            }
        };

        fetchData();
    }, []);

    const setFilteredEvents = (filters : Filters) => {
        const judet = filters.judetFilter;
        const facultate = filters.facultateFilter;
        const categorie = filters.categorieFilter;
        console.log(judet);
        console.log(facultate);
        console.log(categorie);
        const filteredEvents : Event[] = events.filter(e => {
            const values = Object.values(e);
            return (
              (judet === null || values.includes(judet)) &&
              (facultate === null || values.includes(facultate)) &&
              (categorie === null || values.includes(categorie))
            );
          });
        console.log(filteredEvents);
        setEvents(filteredEvents);
    };

    return (
        <div className="flex flex-wrap justify-center">
            <Search onFilter={() => setFilteredEvents}/>
            <div className="flex flex-wrap w-2/3">
                {events.map(event => (
                    <EventThumbnail key={event._id} NAME={event.name} IMAGE={event.imageUrl} FACULTATE={event.organizer} />
                ))}

            </div>
        </div>
    )
}