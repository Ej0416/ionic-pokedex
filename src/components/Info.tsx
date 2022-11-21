import { IonButton, IonProgressBar } from "@ionic/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { PokeAbility, PokeStat } from "../types";

enum Tabs {
    About = "about",
    Stat = "stat",
}

interface Props {
    weight: number;
    height: number;
    infoUrl: string;
    ability: PokeAbility[];
    stats: PokeStat[];
}

interface PokeInfo {
    habitat: {
        name: string;
    };
    flavor_text_entries: {
        flavor_text: string;
        language: {
            name: string;
        };
    }[];
}

export function Info({ weight, height, infoUrl, ability, stats }: Props) {
    const [activeTab, setActiveTab] = useState<Tabs>(Tabs.About);
    const [pokeInfo, setPokeInfo] = useState<PokeInfo>();
    const [initialized, setsetInitialized] = useState(false);

    async function fetchPokeInfo(url: string) {
        const results = await fetch(url);
        const data = await results.json();
        return data;
    }

    useEffect(() => {
        async function doWork() {
            const data = await fetchPokeInfo(infoUrl);
            setPokeInfo(data);
        }

        if (!initialized) {
            setsetInitialized(true);
            doWork();
        }
    }, [initialized, infoUrl]);

    if (!pokeInfo) {
        return null;
    }

    return (
        <div className="mt-[340px] pt-2">
            <div className="flex justify-between">
                <IonButton
                    fill="clear"
                    className={classNames(
                        "text-gray-500 text-base font-bold m-0 rounded-tr-3xl w-1/2",
                        {
                            "bg-grayishDarkBlack text-white":
                                activeTab === Tabs.About,
                        }
                    )}
                    id="aboutBtn"
                    onClick={() => setActiveTab(Tabs.About)}
                >
                    About
                </IonButton>

                <IonButton
                    fill="clear"
                    className={classNames(
                        "text-gray-500 text-base font-bold m-0 rounded-tr-2xl rounded-tl-2xl w-1/2",
                        {
                            "bg-grayishDarkBlack text-white":
                                activeTab === Tabs.Stat,
                        }
                    )}
                    id="statBtn"
                    onClick={() => setActiveTab(Tabs.Stat)}
                >
                    Stat
                </IonButton>
            </div>

            <div
                id="info-content"
                className="bg-grayishDarkBlack px-4 w-screen"
            >
                {/* for about stats */}
                {activeTab === Tabs.About && (
                    <div id="about" className="pb-4 px-8">
                        <p className="text-justify text-gray-300 text-md">
                            {
                                pokeInfo.flavor_text_entries.find(
                                    (item) => item.language.name === "en"
                                )?.flavor_text
                            }
                        </p>
                        <div className="flex justify-between items-center mt-4 ">
                            <div>
                                <h2
                                    id="pokeName"
                                    className="text-2xl font-bold text-white"
                                >
                                    {`${height / 10} m`}
                                </h2>
                                <p
                                    id="pokeNum"
                                    className="text-gray-500 text-base"
                                >
                                    Height
                                </p>
                            </div>
                            <div className="flex flex-col items-center w-max-18 ">
                                <h2
                                    id="pokeName"
                                    className="text-2xl font-bold text-white"
                                >
                                    {`${weight / 10} kg`}
                                </h2>
                                <p
                                    id="pokeNum"
                                    className="text-gray-500 text-base"
                                >
                                    Wieght
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 pb-2">
                            <div>
                                <h2
                                    id="pokeName"
                                    className="text-lg font-bold text-white capitalize"
                                >
                                    {pokeInfo.habitat.name}
                                </h2>
                                <p
                                    id="pokeNum"
                                    className="text-gray-500 text-base"
                                >
                                    Habitat
                                </p>
                            </div>
                            <div className="flex flex-col items-center w-max-18">
                                <h2
                                    id="pokeName"
                                    className="text-lg font-bold text-white capitalize"
                                >
                                    {ability.map((item, index) => (
                                        <p>{item.ability.name}</p>
                                    ))}
                                </h2>
                                <p
                                    id="pokeNum"
                                    className="text-gray-500 text-base"
                                >
                                    Ability
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* for stats tab */}
                {activeTab === Tabs.Stat && (
                    <div id="stat" className="py-8 px-4">
                        <h1 className="text-white text-xl font-bold mb-2">
                            Base Stat
                        </h1>

                        <div className="flex flex-col">
                            {stats.map((item) => (
                                <div className="flex">
                                    <div className="w-1/2 flex justify-between text-right">
                                        <span className="capitalize text-yellow-300">
                                            {item.stat.name}
                                        </span>
                                        <div className="text-end text-white">
                                            <span className="capitalize mr-4">
                                                {item.base_stat}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 mt-2">
                                        {" "}
                                        <IonProgressBar
                                            value={item.base_stat / 100}
                                            className="h-2 rounded-full"
                                        ></IonProgressBar>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
