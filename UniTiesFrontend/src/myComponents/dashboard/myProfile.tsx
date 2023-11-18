interface profileProps{
    NAME: string,
    IMAGE: string,
    EMAIL: string,
    JUDET: string,
}

export default function MyProfile(props: profileProps){
    return(
    <>
        <div className="flex flex-grow w-3/4 flex-wrap h-full justify-center p-12">
            <div className="flex flex-wrap w-full content-start justify-center">
                <div className="h-48 w-48 overflow-hidden bg-white rounded-full">
                    <img src={props.IMAGE} className="h-full w-full object-cover"/>
                </div>
                <h1 className="w-full font-bold text-4xl mt-6 mb-24 text-center">{props.NAME}</h1>
            </div>
            <div className="flex flex-wrap grow content-center justify-center">
                <input type="text" className="w-full h-1/4 m-1 p-6 bg-slate-100" placeholder="Nume"></input>
                <input type="text" className="w-full h-1/4 m-1 p-6 bg-slate-100" placeholder="Email"></input>
                <select className=" p-6 m-1 w-full bg-slate-100">
                    <option value="Bucuresti">Bucuresti</option>
                </select>
                <button className="bg-menu px-20 py-6 rounded-3xl mt-4 text-white">Salveaza</button>
            </div>
        </div>{/* HERE ENDS FIRST DIV */}
    </>
    )
}