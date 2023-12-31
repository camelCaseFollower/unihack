import Search, { Filters, Options } from "./Search"
import EventThumbnail from "./EventThumbnail"
import { useState, useEffect } from "react"
import { fetchEvents, Event } from "../../services/events";

export default function Evenimente() {
    const [events, setEvents] = useState<Event[]>([]);
    const [reload, setReload] = useState<boolean>(false);
    const [options, setOptions] = useState<Options>({
        judete: ['-'],
        categorii: ['-'],
        facultati: ['-']
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
                localStorage.setItem("initialEvents", JSON.stringify(data));
                const tmp: Options = {
                    judete: Array.from(new Set(data.map(e => e.county))),
                    categorii: Array.from(new Set(data.map(e => e.category))),
                    facultati: Array.from(new Set(data.map(e => e.organizer)))
                };
                setOptions(tmp);
            } catch (error) {
                console.log("events error");
            }
            setReload(false);
        };

        fetchData();
    }, [reload]);

    function setFilteredEvents(filters: Filters) {
        const judet = filters.judetFilter;
        const facultate = filters.facultateFilter;
        const categorie = filters.categorieFilter;

        const _initialEvents = localStorage.getItem("initialEvents");
        if (_initialEvents !== null) {
            const initialEvents: Event[] = JSON.parse(_initialEvents);

            let filteredEvents: Event[] = [];
            let filters: string[] = [];

            if (judet !== "" && judet !== "Judet")
                filters.push(judet);

            if (facultate !== "" && facultate !== "Facultate")
                filters.push(facultate);

            if (categorie !== "" && categorie !== "Categorie")
                filters.push(categorie);

            filters.forEach(f => f.toLocaleLowerCase);

            console.log(filters);
            filteredEvents = [];
            initialEvents.forEach((e) => {
                const values: string[] = Object.values(e);
                values.forEach(v => v.toLocaleLowerCase);
                console.log(values);
                let nr = 0;
                filters.forEach(f => {
                    if (values.includes(f))
                        nr++;
                });

                if (nr === filters.length)
                    filteredEvents.push(e);
            })

            setEvents(filteredEvents);
        }
    };

    return (
        <div className="flex flex-wrap justify-center w-full">
            <Search onFilter={setFilteredEvents} options={options} />
            <div className="flex flex-wrap w-2/3">
                {events.map((event ) => (
                    <EventThumbnail key={event._id} NAME={event.name} IMAGE={event.imageUrl} FACULTATE={event.organizer} URL={"/event/:" + event._id} />
                ))}
            </div>
        </div>
    )
}