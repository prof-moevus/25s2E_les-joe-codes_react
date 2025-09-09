"use client";
import {useEffect, useState} from "react";

export default function Pokedex() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pokemonId, setPokemonId] = useState(25);

    // Fetch du Pokémon quand l'ID change
    useEffect(() => {
        setLoading(true);
        fetchPokemonWith()
        const fetchPokemon = async () => {
            setLoading(true);

            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error('Erreur:', error);
            } finally {
                setLoading(false);
            }
        };
    }, [pokeID]);

        // on met un lag pour ne pas lancer le fetch tout de suite. En prod 500, pour debug 1500
        const debounceTimer = setTimeout(fetchPokemon, 1500)
        // cleanup : si pokeId change on vient nettoyer (supprimer) le timer, le fetch va être annuler
        return () => {console.log("DB pokedex clean up " + debounceTimer); clearTimeout(debounceTimer)};
    }, [pokemonId]);

    return (
        <>
            <h1 className={"text-slate-100"}>Pokédex avec useEffect</h1>
            {pokemon && <PokemonCard pokemon={pokemon}/>}
            <button onClick={getNewPokemon}> RESET</button>
        </>
    )
}

function PokemonCard({pokemon}) {

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