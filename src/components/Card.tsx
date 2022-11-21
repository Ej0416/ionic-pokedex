import { useEffect, useState } from "react";
import { PokeAbility, Pokemon, PokemonTypes, PokeStat } from "../types";
import { Info } from "./Info";
import Main from "./Main";

interface Props {
    pokemon: Pokemon;
    index: string;
}

interface Stats {
    weight: number;
    height: number;
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            };
        };
    };
    types: PokemonTypes[];
    species: {
        url: string;
    };
    abilities: PokeAbility[];
    stats: PokeStat[];
}

export function Card({ pokemon, index }: Props) {
    const [pokeStats, setPokeStats] = useState<Stats>();
    const [initialized, setsetInitialized] = useState(false);

    async function fetchStats(url: string) {
        const results = await fetch(url);
        const data = await results.json();
        return data;
    }

    useEffect(() => {
        async function doWork() {
            const data = await fetchStats(pokemon.url);
            setPokeStats(data);
        }

        if (!initialized) {
            setsetInitialized(true);
            doWork();
        }
    }, [initialized, pokemon.url]);

    if (!pokeStats) {
        return null;
    }

    return (
        <div className="bg-grayishBlack">
            <Main
                name={pokemon.name}
                index={index}
                url={pokeStats.sprites.other["official-artwork"].front_default}
                types={pokeStats.types}
            />
            <Info
                weight={pokeStats.weight}
                height={pokeStats.height}
                infoUrl={pokeStats.species.url}
                ability={pokeStats.abilities}
                stats={pokeStats.stats}
            />
        </div>
    );
}
