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
