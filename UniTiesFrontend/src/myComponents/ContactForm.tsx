import Phone from "../imgs/phone.svg"
import Email from "../imgs/email.svg"

export default function ContactForm(){
    return(
        <div className="flex flex-wrap w-2/3 justify-center">
            <h1 className="text-6xl mb-8 font-bold">Intrebari?</h1>
            <div className=" flex flex-wrap w-full mb-12">
                <div className="grow m-2 flex justify-center flex-col content-center p-6 blue-border shadow h-60 bg-white rounded-3xl"><img src={Email} className="w-24 h-24"/></div>
                <div className="grow m-2 flex justify-center flex-col content-center p-6 blue-border shadow h-60 bg-white rounded-3xl"><img src={Phone} className="w-24 h-24"/></div>
            </div>
            <div className="flex w-full mb-14">
            <form className="flex flex-wrap w-full justify-center">
                    <input type="text" placeholder="Email" className="w-full rounded-3xl p-6 m-2"></input>
                    <input type="text" placeholder="Nume" className="grow rounded-3xl p-6 m-2"></input>
                    <input type="text" placeholder="Prenume" className="grow rounded-3xl p-6 m-2"></input>
                    <textarea placeholder="Mesaj" rows={12} className="w-full rounded-3xl p-6 m-2 resize-none"></textarea>
                    <button className="bg-menu menu-button transition-all hover:px-32 py-8 px-20 rounded-3xl text-white text-xl my-4">Trimite</button>
                </form>
            </div>
        </div>
    )
}