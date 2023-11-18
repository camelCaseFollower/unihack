import {Link} from "react-router-dom"

interface CardProps{
    TITLE: string,
    BIO: string,
    IMAGE: string,
    SITE: string,
}

export default function Card(props: CardProps){
    return(
        <>
        <div className="flex flex-wrap card w-1/2 bg-white shadow rounded-3xl mx-12 my-6 overflow-hidden">
                    <div className="w-1/2 h-full overflow-hidden">
                        <Link to={props.SITE}><img className="cardImage transition-all duration-700 hover:scale-110 w-full h-full object-cover"src={props.IMAGE} /></Link>
                    </div>
                    <div className="flex flex-wrap cardContent w-1/2 h-full p-8">
                        <h2 className="text-4xl">{props.TITLE}</h2>
                        <p className="self-start text-lg">{props.BIO}</p>
                        <Link to={props.SITE} className="text-blue-500 underline text-2xl self-end mb-2 transition-all hover:translate-x-2">See more </Link>
                    </div>
                </div>
        </>
    )
}