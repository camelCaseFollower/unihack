

export default function EventCreator(){
    return(
        <div className="flex flex-wrap w-3/4 content-start grow p-12">
            <h1 className="text-4xl font-bold w-full text-center mb-6">Adauga un eveniment</h1>
            <div className="flex flex-wrap w-full mb-12">{/* Here will be the photos */}
                <div className="grow ml-3 h-60 bg-black"></div>
                <div className="grow mx-3 h-60 bg-black"></div> 
                <div className="grow mr-3 h-60 bg-black"></div>     
            </div>
            <div className="flex flex-wrap w-full justify-center">
                <input type="text" className="bg-slate-100 p-6 w-full m-2" placeholder="Titlu eveniment"></input>
                <select className=" p-6 m-1 w-full bg-slate-100 m-2">
                    <option value="Bucuresti">Bucuresti</option>
                </select>
                <select className=" p-6 m-1 w-full bg-slate-100 m-2">
                    <option value="UPB">UPB</option>
                </select>
                <select className=" p-6 m-1 w-full bg-slate-100 m-2">
                    <option value="true">Nu oferim Cazare</option>
                    <option value="true">Oferim Cazare</option>
                </select>
                <textarea className="bg-slate-100 p-6 w-full m-2 resize-none" rows={10} placeholder="Descriere eveniment"></textarea>
                <button className="bg-menu menu-button transition-all py-8 px-20 rounded-3xl text-white text-xl my-4">Posteaza</button>
            </div>
        </div>
    )
}