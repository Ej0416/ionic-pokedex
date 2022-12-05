import { IonButton, IonIcon } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import { Stats } from "../types";
import { Card } from "./Card";

interface Props {
    result: Stats | undefined;
    setResult: (result: Stats | undefined) => void;
}

export default function SearchResult({ result, setResult }: Props) {
    console.log(result);

    function closeSearchResult() {
        const searchModal = document.getElementById("searchResult");
        searchModal?.classList.remove("h-screen");
        searchModal?.classList.add("h-0");

        setResult(undefined);
    }

    return (
        <div
            id="searchResult"
            className="absolute flex flex-col items-center justify-center top-0 h-0 w-screen bg-slate-700 transition-all overflow-hidden z-50"
        >
            {result ? (
                <Card result={result} />
            ) : (
                <h1 className="text-white text-3xl">No result found</h1>
            )}

            <IonButton
                color="danger"
                className="w-1/4 absolute bottom-5"
                onClick={() => closeSearchResult()}
            >
                <IonIcon icon={closeCircleOutline}></IonIcon>
            </IonButton>
        </div>
    );
}
