import classNames from "classnames";
import { PokemonTypes } from "../types";

interface Props {
    name: string;
    index: string;
    url: string;
    types: PokemonTypes[];
}

export default function Main({ name, index, url, types }: Props) {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div>
                    <h2
                        id="pokeName"
                        className="text-2xl font-bold text-black capitalize"
                    >
                        {name}
                    </h2>
                    <p id="pokeNum" className="text-gray-500">
                        {`#${index}`}
                    </p>
                </div>

                <div className="flex flex-col items-center w-max-18">
                    <p id="pokeType" className="text-gray-500">
                        {types.map((item, index) => (
                            <p
                                className={classNames(
                                    "px-2  rounded-xl text-white capitalize",
                                    {
                                        "bg-green-500":
                                            item.type.name === "grass",
                                        "bg-purple-500":
                                            item.type.name === "poison",
                                        "bg-normal text-black":
                                            item.type.name === "normal",
                                        "bg-orange-500 ":
                                            item.type.name === "fire",
                                        "bg-blue-500 ":
                                            item.type.name === "water",
                                        "bg-yellow-500 ":
                                            item.type.name === "electric",
                                        "bg-cyan-500 text-black":
                                            item.type.name === "ice",
                                        "bg-red-400 ":
                                            item.type.name === "fighting",
                                        "bg-yellow-900 ":
                                            item.type.name === "ground",
                                        "bg-violet-500 ":
                                            item.type.name === "flying",
                                        "bg-fuchsia-500 ":
                                            item.type.name === "psychic",
                                        "bg-lime-500 ":
                                            item.type.name === "bug",
                                        "bg-yellow-600 ":
                                            item.type.name === "rock",
                                        "bg-purple-500 ":
                                            item.type.name === "ghost",
                                        "bg-stone-700 ":
                                            item.type.name === "dark",
                                        "bg-violet-900 ":
                                            item.type.name === "dragon",
                                        "bg-gray-500 ":
                                            item.type.name === "steel",
                                        "bg-rose-400 ":
                                            item.type.name === "fairy",
                                    }
                                )}
                            >
                                {item.type.name}
                            </p>
                        ))}
                    </p>
                </div>
            </div>

            <div className="relative">
                <div className="bg-white w-80 h-80 absolute inset-y-0 inset-x-0 rounded-full  mx-auto"></div>
                <img
                    id="pokeImg"
                    src={url}
                    alt="pokemon"
                    className="absolute -scale-x-100 inset-y-0 inset-x-0  mx-auto max-w-xs"
                />
            </div>
        </div>
    );
}
