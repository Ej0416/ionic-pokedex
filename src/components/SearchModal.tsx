import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import { useState } from "react";
import { Stats } from "../types";
import { fetchSpecificPokemon } from "../utils/fetchSpecificpokemon";
import SearchResult from "./SearchResult";

export default function SearchModal() {
    const [search, setSearch] = useState("test");
    const [pokemon, setPokemon] = useState<Stats | undefined>();
    const [loading, setLoading] = useState(false);

    function closeModal() {
        const modal = document.getElementById("searchModal");
        modal?.classList.remove("h-screen");
        modal?.classList.add("h-0");
    }

    function resultTransition() {
        const searchModal = document.getElementById("searchResult");
        searchModal?.classList.add("h-screen");
        searchModal?.classList.remove("h-0");
    }

    async function showSearchResult() {
        setLoading(true);

        setTimeout(async () => {
            const searchQuery = document.getElementById(
                "searchQuery"
            ) as HTMLInputElement;

            const query = searchQuery?.value.toLowerCase();
            console.log(query);

            await fetchSpecificPokemon(query)
                .then(async (response) => {
                    const result = await response.json();
                    setPokemon(result);
                    setLoading(false);
                    resultTransition();
                })
                .catch(() => {
                    setPokemon(undefined);
                    setLoading(false);
                    resultTransition();
                });
        }, 500);
    }

    return (
        <div
            id="searchModal"
            className="h-0 w-screen absolute botom-0 left-0 flex flex-col justify-center items-center bg-grayishBlack transition-all overflow-hidden"
        >
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center bg-white w-[300px] px-2 space-x-4">
                    <IonIcon
                        icon={searchOutline}
                        className="text-xl text-slate-800 w-1/6"
                    ></IonIcon>
                    <input
                        id="searchQuery"
                        className="w-3/4 px-2 py-2 outline-0"
                        type="text"
                        placeholder="Search Pokemon..."
                        // onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {loading && <IonSpinner name="circular"></IonSpinner>}

                <div className="w-full flex justify-center space-x-4 mt-3">
                    <IonButton
                        color="success"
                        className="w-1/4"
                        onClick={() => showSearchResult()}
                        disabled={loading}
                    >
                        Go
                    </IonButton>
                    <IonButton
                        color="danger"
                        className="w-1/4"
                        onClick={() => closeModal()}
                    >
                        Cancel
                    </IonButton>
                </div>
            </div>

            {/* result modal */}
            <SearchResult result={pokemon} setResult={setPokemon} />
        </div>
    );
}
