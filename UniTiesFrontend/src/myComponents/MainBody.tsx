import Header from "../imgs/header.jpg"
import Post1 from "../imgs/example1.jpg"
import Post2 from "../imgs/example2.jpg"
import Post3 from "../imgs/example3.jpg"
import Card from "./Card"
import ContactForm from "./ContactForm"
import Footer from "./Footer"


export default function MainBody(){
    return(
    <>
        <div className="flex flex-wrap mainScreen h-screen w-full">
            <div className="header flex w-full h-2/3 bg-header justify-center">
                <img src={Header} className="h-full"></img>
            </div> {/*----- here header div ends ----- */}
            <div className="body flex flex-wrap w-full justify-center">
                <div className="posts flex flex-wrap w-1/2 m-28">
                    <div className="post w-full m-2 bg-black rounded-3xl overflow-hidden"><img src={Post1} className="w-full h-full object-cover hover:scale-110 transition-all duration-700"/></div>
                    <div className="post w-2/3 m-1 bg-black rounded-3xl overflow-hidden"><img src={Post2} className="w-full h-full object-cover hover:scale-110 transition-all duration-700"/></div>
                    <div className="post grow w-1/4 m-1 rounded-3xl">
                        <div className="subpost bg-black grow rounded-3xl overflow-hidden"><img src={Post1} className="w-full h-full object-cover hover:scale-110 transition-all duration-700"/></div>
                        <div className="subpost bg-black grow rounded-3xl overflow-hidden"><img src={Post3} className="w-full h-full object-cover hover:scale-110 transition-all duration-700"/></div>
                    </div>{/*----- posts Sub Divs ends here ----- */}
                </div>{/*----- here posts div ends -----*/}
                <div className="flex flex-wrap w-full justify-center my-28">
                    <Card TITLE="Title Number One" IMAGE="imgs/post1.jpg"  SITE="#" BIO="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                    <Card TITLE="Title of card" IMAGE="imgs/post2.jpg"  SITE="#" BIO="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                    <Card TITLE="Title of card" IMAGE="imgs/post3.jpg"  SITE="#" BIO="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                </div>
                <ContactForm />
            </div>{/*----- here body div ends -----*/}
            <Footer />
        </div>{/*----- here mainScreen div ends -----*/}
    </>
    )
}