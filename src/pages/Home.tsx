import {
    IonContent,
    IonHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage,
    IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Header from "../components/Header";
import { Pokemon } from "../types";

export default function Home() {
    const [items, setItems] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState();

    async function fetchPkemon() {
        const url = nextUrl ?? "https://pokeapi.co/api/v2/pokemon";

        const result = await fetch(url);
        const data = await result.json();

        setItems([...items, ...data.results]);
        setNextUrl(data.next);
    }

    useEffect(() => {
        async function doWork() {
            await fetchPkemon();
        }

        doWork();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="bg-grayishBlack">
                    <Header />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {items.map((item, index) => (
                    <Card key={index} pokemon={item} index={`${index + 1}`} />
                ))}
                <IonInfiniteScroll
                    onIonInfinite={(ev) => {
                        fetchPkemon();
                        setTimeout(() => ev.target.complete(), 500);
                    }}
                >
                    <IonInfiniteScrollContent></IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}
