import { Stats } from "../types";
import { Info } from "./Info";
import Main from "./Main";

interface Props {
    result: Stats;
}

export function Card({ result }: Props) {
    return (
        <div className="bg-grayishBlack h-full " id={`pokemon-${result.id}`}>
            <Main
                name={result.name}
                index={result.id}
                url={result.sprites.other["official-artwork"].front_default}
                types={result.types}
            />
            <Info
                weight={result.weight}
                height={result.height}
                infoUrl={result.species.url}
                ability={result.abilities}
                stats={result.stats}
            />
        </div>
    );
}
