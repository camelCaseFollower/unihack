import Cap from "../../imgs/searchIcons/cap.svg"
import Location from "../../imgs/searchIcons/location.svg"
import School from "../../imgs/searchIcons/school.svg"
import SearchLogo from "../../imgs/searchIcons/search.svg"
import React, { useState } from "react"

interface ChildProps {
    onFilter: (filters: Filters) => void;
}

export interface Filters {
    judetFilter: string,
    facultateFilter: string,
    categorieFilter: string
}

export default function Search({ onFilter }: ChildProps) {
    const [judet, setJudet] = useState("");
    const [facultate, setFacultate] = useState("");
    const [categorii, setCategorii] = useState("");

    const handleFilterClick = () => {
        console.log(judet);
        console.log(facultate);
        console.log(categorii);
        onFilter({
            judetFilter: judet,
            facultateFilter: facultate,
            categorieFilter: categorii
        })
    };

    return (
        <div className=" items-center justify-center flex w-full h-28 shadow">
            <select onChange={(e) => setJudet(e.target.value)} className="selectL h-1/2 px-40 bg-white">
                <option value="judet">Judet</option>
                <option value="Bucuresti">Bucuresti</option>
                <option value="Timisoara">Timisoara</option>
                <option value="Cluj">Cluj</option>
                <option value="Iasi">Iasi</option>
                <option value="Brasov">Brasov</option>
            </select>
            <select onChange={(e) => setFacultate(e.target.value)} className="selectM h-1/2 px-40 bg-white">
                <option value="facultate">Facultate</option>
                <option value="UPB">UPB</option>
                <option value="UPT">UPT</option>
                <option value="ASE">ASE</option>
                <option value="UB">UB</option>
                <option value="FILS">FILS</option>
            </select>
            <select onChange={(e) => setCategorii(e.target.value)} className="selectR h-1/2 px-40 bg-white">
                <option value="categorii">Categorii</option>
                <option value="UPB">Tehnologie</option>
                <option value="UPT">Agricultura</option>
                <option value="ASE">Economie</option>
                <option value="UB">Transport</option>
                <option value="FILS">Social</option>
            </select>
            <button className="h-1/2">
                <img onClick={() => handleFilterClick} src={SearchLogo} className="h-full p-3 bg-menu select-search" />
            </button>
        </div>
    )
}