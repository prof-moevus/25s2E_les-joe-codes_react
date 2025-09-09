'use client';

import {useState, useEffect} from 'react';

// Composant principal
export default function Pokedex() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pokemonId, setPokemonId] = useState(25);

    // Fetch du Pokémon quand l'ID change
    useEffect(() => {
        // Force une valeur de pokeID si l'utilisateur entre une valeure erronée
        if (pokemonId < 1 || pokemonId > 1025) {
            setPokemonId(1)
        }
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

        // on met un lag pour ne pas lancer le fetch tout de suite. En prod 500, pour debug 1500
        const debounceTimer = setTimeout(fetchPokemon, 1500)
        // cleanup : si pokeId change on vient nettoyer (supprimer) le timer, le fetch va être annuler
        return () => {console.log("DB pokedex clean up " + debounceTimer); clearTimeout(debounceTimer)};
    }, [pokemonId]);

    return (
        <div className="min-h-screen bg-blue-100 p-8">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-4xl font-bold text-center mb-8">Pokédex</h1>
                {/* Contrôles */}
                <div className="bg-white rounded-lg p-4 mb-8 flex items-center justify-center gap-4">

                    <button
                        onClick={() => setPokemonId(prev => Math.max(1, prev - 1))}
                        disabled={pokemonId <= 1 || loading}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        ← Précédent
                    </button>

                    <input
                        type="number"
                        value={pokemonId}
                        onChange={(e) => setPokemonId(Number(e.target.value))}
                        min="1"
                        max="1025"
                        className="w-20 px-3 py-2 border rounded text-center"
                    />

                    <button
                        onClick={() => setPokemonId(prev => Math.min(1025, prev + 1))}
                        disabled={pokemonId >= 1025 || loading}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        Suivant →
                    </button>

                </div>

                {/* Affichage */}
                <div className="flex justify-center">
                    {loading ? (
                        <p className="text-xl">Chargement...</p>
                    ) : (
                        pokemon && <PokemonCard pokemon={pokemon}/>
                    )}
                </div>

            </div>
        </div>
    );
}


// Composant carte Pokémon
function PokemonCard({pokemon}) {
    return (
        <div className="bg-orange-200 w-full max-w-md p-3 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-center capitalize mb-1">
                #{pokemon.id} - {pokemon.name}
            </h2>

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-24 mx-auto"
            />

            <div className="mt-2 space-y-1">
                <p><strong>Taille:</strong> {pokemon.height / 10} m</p>
                <p><strong>Poids:</strong> {pokemon.weight / 10} kg</p>
                <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
            </div>
        </div>
    );
}
