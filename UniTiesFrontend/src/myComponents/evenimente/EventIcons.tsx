import { Icon } from '@iconify/react';

interface EventProps{
    organizer:string,
    county:string,
    category:string
}

export default function EventIcons(props: EventProps){
    return(
    <div className="flex flex-wrap w-full justify-center">
        <div className="flex flex-wrap w-1/2">
            <div className="flex flex-wrap grow justify-center content-start bg-whitey rounded-3xl m-2 p-3">
                <h3 className="text-xl font-bold w-full mb-4 text-center w-full">{props.organizer}</h3>
                <Icon icon="fa6-solid:school" className="w-16 h-16 text-blue" />
            </div>
            <div className="flex flex-wrap grow justify-center content-start bg-whitey rounded-3xl mx-1 my-2 p-3">
                <h3 className="text-xl font-bold w-full mb-4 text-center w-full">{props.county}</h3>
                <Icon icon="ph:backpack-fill" className="w-16 h-16 text-blue"/>
            </div>
            <div className="flex flex-wrap grow justify-center content-start bg-whitey rounded-3xl m-2 p-3">
                <h3 className="text-xl font-bold w-full mb-4 text-center w-full">{props.category}</h3>
                <Icon icon="carbon:location-filled" className="w-16 h-16 text-blue"/>
            </div>
        </div>
    </div>
    )
}