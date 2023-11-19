import Cap from "../../imgs/searchIcons/cap.svg"
import Location from "../../imgs/searchIcons/location.svg"
import School from "../../imgs/searchIcons/school.svg"
import SearchLogo from "../../imgs/searchIcons/search.svg"
import React, { useState } from "react"

interface ChildProps {
    onFilter: (filters: Filters) => void;
    options: Options
}

export interface Options {
    judete: string[],
    categorii: string[],
    facultati: string[]
}

export interface Filters {
    judetFilter: string,
    facultateFilter: string,
    categorieFilter: string
}

export default function Search({ onFilter, options }: ChildProps) {
    const [judet, setJudet] = useState("");
    const [facultate, setFacultate] = useState("");
    const [categorii, setCategorii] = useState("");

    function handleFilterClick() {
        if ((judet === "" && facultate === "" && categorii === "")
            || (judet === "Judet" && facultate === "Facultate" && categorii === "Categorii"))
            return;
        onFilter({
            judetFilter: judet,
            facultateFilter: facultate,
            categorieFilter: categorii
        })
    };

    return (
        <div className=" items-center justify-center flex w-full h-28 shadow">
            <select onChange={(e) => setJudet(e.target.value)} className="selectL h-1/3 px-40 bg-white">
                <option value="Judet">Judet</option>
                {options.judete.map(j => (
                    <option key={options.judete.indexOf(j)} value={j}>{j}</option>
                ))}
            </select>
            <select onChange={(e) => setFacultate(e.target.value)} className="selectM h-1/3 px-40 bg-white">
                <option value="Facultate">Facultate</option>
                {options.facultati.map(j => (
                    <option key={options.facultati.indexOf(j)} value={j}>{j}</option>
                ))}
            </select>
            <select onChange={(e) => setCategorii(e.target.value)} className="selectR h-1/3 px-40 bg-white">
                <option value="Categorie">Categorie</option>
                {options.categorii.map(j => (
                    <option key={options.categorii.indexOf(j)} value={j}>{j}</option>
                ))}
            </select>
            <button className="h-1/3">
                <img onClick={handleFilterClick} src={SearchLogo} className="h-full p-2 bg-menu select-search" />
            </button>
        </div>
    )
}