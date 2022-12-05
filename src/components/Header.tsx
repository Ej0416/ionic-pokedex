import { IonButton, IonIcon } from "@ionic/react";
import { logOutOutline, searchCircleOutline } from "ionicons/icons";

export default function Header() {
    function openModal() {
        const modal = document.getElementById("searchModal");
        modal?.classList.remove("h-0");
        modal?.classList.toggle("h-screen");
    }

    return (
        <div>
            <header className="flex justify-between items-center  h-full px-2 bg-grayishDarkBlack">
                <div>
                    <IonButton
                        fill="clear"
                        color="warning"
                        className="text-xl text-center"
                        onClick={() => openModal()}
                    >
                        <IonIcon icon={searchCircleOutline}></IonIcon>
                    </IonButton>
                </div>
                <div className="h-8">
                    <img src={"img/logo.png"} alt="" className="h-full" />
                </div>
                <div>
                    <IonButton
                        fill="clear"
                        color="danger"
                        className="text-xl"
                        id="closeApp"
                    >
                        <IonIcon icon={logOutOutline}></IonIcon>
                    </IonButton>
                </div>
            </header>
        </div>
    );
}
