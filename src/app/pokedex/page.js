"use client";

import {useState} from "react";

export default function Pokedex() {
    const [pokemon, setPokemon] = useState(null);

    setTimeout(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/25')
            .then(response => response.json())
            .then(pokemon => {
                console.log(`DB 23456 : ${pokemon.name}`)
                setPokemon(pokemon);
            });
    }, 1500);



    return (
        <>
            <h1 className={"text-slate-100"}>Pokédex avec useEffect</h1>
            <p className={"text-purple-300"}>Pokemon name : {pokemon?pokemon.name:"Loading..."}</p>
        </>
    )
}