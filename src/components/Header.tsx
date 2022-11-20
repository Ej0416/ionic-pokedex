import { IonButton, IonIcon } from "@ionic/react";
import { alertCircleOutline, menuOutline } from "ionicons/icons";

export default function Header() {
    return (
        <header className="flex justify-between pl-4 items-center   h-full">
            <div>
                <IonButton fill="clear" color="light" className="text-xl">
                    <IonIcon icon={alertCircleOutline}></IonIcon>
                </IonButton>
            </div>
            <div className="h-6">
                <img src={"img/logo.png"} alt="" className="h-full" />
            </div>
            <div>
                <IonButton fill="clear" color="light" className="text-xl">
                    <IonIcon icon={menuOutline}></IonIcon>
                </IonButton>
            </div>
        </header>
    );
}
