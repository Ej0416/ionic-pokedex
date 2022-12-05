export interface Pokemon {
    name: string;
    url: string;
    num: string;
}

export interface PokemonTypes {
    type: {
        name: string;
    };
}

export interface PokeAbility {
    ability: {
        name: string;
    };
}

export interface PokeStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface Stats {
    id: string;
    name: string;
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
