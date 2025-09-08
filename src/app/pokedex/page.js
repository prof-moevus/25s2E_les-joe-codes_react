"use client";

import {useEffect, useState} from "react";


export default function Pokedex() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);

    function reset() {
        setPokemon(null);
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/25')
                .then(response => response.json())
                .then(pokemon => {
                    console.log(`DB 89234 : ${pokemon.name}`)
                    setPokemon(pokemon);
                    setLoading(false);
                });
        }, 1000);
        return () => {
            setPokemon(null);};
    }, [])


    return (
        <>
            <h1 className={"text-slate-100"}>Pokédex avec useEffect</h1>
            {pokemon
                && <PokemonCard pokemon={pokemon}/>
                || <p>Chargement ...</p>
            }
            <button onClick={reset}> RESET</button>
        </>
    )
}

function PokemonCard({pokemon}) {

    useEffect(() => {

        return () => {console.log("comp demonté")}
    }, [])
    return (
        <div className="bg-orange-200 w-1/3 h-1/2 p-3">
            <h3 className="text-xl font-bold uppercase text-center">
                {pokemon.name}
            </h3>
            <div className="ring-1 ring-blue-500">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    style={{width: '150px'}}
                />
            </div>
            <p>Numéro : #{pokemon.id}</p>
            <p>Poids : {pokemon.weight / 10} kg</p>


        </div>
    )
}