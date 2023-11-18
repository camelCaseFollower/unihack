import {Link} from "react-router-dom"

interface thumbnailProps{
    NAME: string,
    IMAGE: string,
    FACULTATE: string,
}

export default function Thumbnail(props: thumbnailProps){
    return(
        <div className="flex flex-wrap w-1/4 shadow rounded-3xl overflow-hidden grow m-2">
            <div className="w-full h-1/2">
                <img src={props.IMAGE} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 h-1/2">
                <h2 className="font-bold">{props.NAME}</h2>
                <p>Organizat de {props.FACULTATE}</p>
                <Link to="/" className="underline text-blue-400 transition-all hover:translate-x-1">Detalii</Link>
            </div>
        </div>
    )
}