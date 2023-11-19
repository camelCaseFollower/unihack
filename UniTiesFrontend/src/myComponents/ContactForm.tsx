import Phone from "../imgs/phone.svg"
import Email from "../imgs/email.svg"
import { useState } from "react";
import { Question, postQuestion } from "../services/utils";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [nume, setNume] = useState("");
    const [prenume, setPrenume] = useState("");
    const [mesaj, setMesaj] = useState("");

    const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const question: Question={
            email: email,
            firstName: prenume,
            lastName: nume,
            message: mesaj
        }

        postQuestion(question);
        
        setEmail("");
        setNume("");
        setPrenume("");
        setMesaj("");
    }

    return (
        <div className="flex flex-wrap w-full lg:w-2/3 justify-center">
            <h1 className="text-6xl mb-8 font-bold">Intrebari?</h1>
            <div className=" flex flex-wrap w-full mb-12">
                <div className="grow m-2 flex justify-center flex-col content-center p-6 blue-border shadow h-30 lg:h-60 bg-white rounded-3xl"><img src={Email} className="w-24 h-24" />contact@unities.ro</div>
                <div className="grow m-2 flex justify-center flex-col content-center p-6 blue-border shadow h-30 lg:h-60 bg-white rounded-3xl"><img src={Phone} className="w-24 h-24" />+40 0768 344 163</div>
            </div>
            <div className="flex w-full mb-14">
                <form onSubmit={handleSend} className="flex flex-wrap w-full justify-center">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" className="w-full rounded-3xl p-6 m-2"></input>
                    <input onChange={(e) => setNume(e.target.value)} value={nume} type="text" placeholder="Nume" className="grow rounded-3xl p-6 m-2"></input>
                    <input onChange={(e) => setPrenume(e.target.value)} value={prenume} type="text" placeholder="Prenume" className="grow rounded-3xl p-6 m-2"></input>
                    <textarea onChange={(e) => setMesaj(e.target.value)} value={mesaj} placeholder="Mesaj" rows={10} className="w-full rounded-3xl p-6 m-2 resize-none"></textarea>
                    <button className="bg-menu menu-button transition-all hover:px-32 py-8 px-20 rounded-3xl text-white text-xl my-4">Trimite</button>
                </form>
            </div>
        </div>
    )
}