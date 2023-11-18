import Cap from "../../imgs/searchIcons/cap.svg"
import Location from "../../imgs/searchIcons/location.svg"
import School from "../../imgs/searchIcons/school.svg"
import SearchLogo from "../../imgs/searchIcons/search.svg"


export default function Search(){
    return(
        <div className=" items-center justify-center flex w-full h-28 shadow">
            <select className="selectL h-1/2 px-40 bg-white">
            <option value="judet">Judet</option>
                <option value="Bucuresti">Bucuresti</option>
                <option value="Timisoara">Timisoara</option>
                <option value="Cluj">Cluj</option>
                <option value="Iasi">Iasi</option>
                <option value="Brasov">Brasov</option>
            </select>
            <select className="selectM h-1/2 px-40 bg-white">
            <option value="facultate">Facultate</option>
                <option value="UPB">UPB</option>
                <option value="UPT">UPT</option>
                <option value="ASE">ASE</option>
                <option value="UB">UB</option>
                <option value="FILS">FILS</option>
            </select>
            <select className="selectR h-1/2 px-40 bg-white">
                <option value="categorii">Categorii</option>
                <option value="UPB">Tehnologie</option>
                <option value="UPT">Agricultura</option>
                <option value="ASE">Economie</option>
                <option value="UB">Transport</option>
                <option value="FILS">Social</option>
            </select>
            <button className="h-1/2"><img src={SearchLogo} className="h-full p-3 bg-menu select-search"/></button>
        </div>
    )
}