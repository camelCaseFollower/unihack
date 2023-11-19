/*import {Event} from "../../services/events"*/
import EventIcons from "./EventIcons"
import Header from "../../imgs/example1.jpg"
import NewsletterAlert from "../newsletter"

export default function PaginaEveniment(/*props: Event*/){
    return(
            <div className="flex flex-wrap w-full content-start justify-center bg-white">
                {/* Title and Date bar div */}
                <div className="flex w-full justify-start shadow px-12 py-3 mb-6">
                    <h1 className="text-2xl font-semibold text-center">Title event example</h1>
                    <div className="flex bg-yellow-400 rounded-xl self-center items-center text-sm px-2 h-3/4 ml-6 mr-2">16.11.2023</div>
                    <div className="flex bg-yellow-400 rounded-xl self-center items-center text-sm px-2 h-3/4 ml-2">19.11.2023</div>
                </div>
                {/* Title and Date bar div ends */}
                <img src={Header} className="w-1/2 h-1/3 rounded-3xl object-cover mb-6" />
                <EventIcons  organizer="Universitatea Politehnica" category="Tehnologie" county="Bucuresti"/>
                <div className="flex flex-wrap w-1/3">
                    <h2 className="font-bold text-4xl mt-6 mb-4 w-full">Subtitle for the event</h2>
                    <p className="EventParagraph py-12 mb-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at erat nec ligula maximus semper. Integer efficitur dolor eros, nec condimentum felis tempus nec. Aenean pellentesque justo magna. Pellentesque sapien lectus, laoreet vitae auctor quis, porta et dui. Nullam bibendum, felis at porttitor porta, arcu leo iaculis ante, ut accumsan quam mauris sed tellus. Integer iaculis arcu et diam luctus, eget efficitur nisl sagittis. Curabitur sed tortor vulputate, tristique dui quis, pulvinar diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec dictum diam et elit tincidunt pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla in nisi nec nisi eleifend lacinia. Aenean eget dapibus velit, quis faucibus dui. Sed vel turpis quis ipsum tempor fermentum vitae eget ipsum.
                    <br/><br/>
                    Duis lobortis lectus vitae ex eleifend posuere. Phasellus vitae sollicitudin metus. Integer congue gravida elementum. Aliquam est eros, pretium sit amet accumsan sed, pellentesque vel nulla. Nulla quam ipsum, sagittis eget fermentum vitae, elementum in massa. Aenean egestas justo felis, mollis ullamcorper leo luctus interdum. Aliquam lacinia, magna nec luctus pulvinar, ante odio scelerisque leo, ac pretium metus nunc quis orci. Donec facilisis viverra urna id tincidunt.
                    <br/><br/>
                    Mauris libero arcu, fermentum eget lacus non, pellentesque rhoncus ligula. Curabitur feugiat, purus quis volutpat eleifend, tortor purus molestie ex, quis sollicitudin augue magna eget eros. Aliquam lacinia mattis ligula ac posuere. Ut velit ante, ornare sit amet pulvinar eu, rhoncus vitae metus. Donec sit amet finibus sem, non iaculis risus. Vivamus interdum risus erat. Nam lacus dolor, elementum ac massa nec, porta consequat massa. Nullam at pulvinar turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nec orci ipsum. </p>
                </div>
                <NewsletterAlert />
            </div>
    )
}