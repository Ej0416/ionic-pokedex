import { IonButton, IonIcon, useIonAlert } from "@ionic/react";
import { alertCircleOutline, menuOutline } from "ionicons/icons";

export default function Header() {
    const [presentAlert] = useIonAlert();

    return (
        <header className="flex justify-between pl-4 items-center   h-full bg-grayishDarkBlack">
            <div>
                <IonButton
                    fill="clear"
                    color="light"
                    className="text-xl text-center"
                    onClick={() =>
                        presentAlert({
                            header: "Info",
                            // subHeader: "Important message",
                            message: "Submitted by: Elnes Jan Isidoro",
                            buttons: ["OK"],
                        })
                    }
                >
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
