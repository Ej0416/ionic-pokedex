import { useEffect, useState } from "react";
import { Pokemon, Stats } from "../types";
import { Card } from "./Card";

interface Props {
    pokemon: Pokemon;
    index: string;
}

export function PokeData({ pokemon, index }: Props) {
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

    return <Card result={pokeStats} />;
}
