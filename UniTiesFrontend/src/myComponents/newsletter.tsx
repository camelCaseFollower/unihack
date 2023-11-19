import { Icon } from '@iconify/react';

export default function NewsletterAlert(){
    return(
        <div className="flex w-full justify-center mb-12">
            <div className="flex flex-col w-1/3 rounded-3xl shadow-xl bg-menu overflow-hidden px-8 py-6">
                <h3 className="grow self-center text-white mb-2 font-semibold text-lg">Doresti sa fii la zi?</h3>
                <div className="flex flex-wrap h-1/2 grow w-full content-center self-center rounded-2xl overflow-hidden">
                    <Icon icon="solar:bell-bold" className="h-full w-10 text-yellow-400 self-center mx-6"/>
                    <input type="text" className="px-12 py-3 grow h-full self-center" placeholder="email"></input>
                    <button><Icon icon="subway:tick" className="self-center w-10 px-3 bg-yellow-400 h-full text-blue"/></button>
                </div>
            </div>
        </div>
    )
}