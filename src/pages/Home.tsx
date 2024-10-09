import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import React from "react";
import { chevronUpOutline, chevronDownOutline} from "ionicons/icons"

const Home: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <IonPage>
      <IonHeader className="ion-padding ion-no-border">
        <IonButton
          expand="block"
          className="ion-margin-top ion-margion-bottom"
          disabled={count === 99}
          onClick={() => setCount(count + 1)}
        >
          <IonIcon icon={chevronUpOutline} />
        </IonButton>
      </IonHeader>
      <IonContent class="ion-text-center" fullscreen>
        <IonText className="center-content">{count > 9 ? count : `0${count}`}</IonText>
      </IonContent>
      <IonFooter className="ion-padding ion-no-border">
        <IonButton
          expand="block"
          className="ion-margin-top ion-margion-bottom"
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
        >
          <IonIcon icon={chevronDownOutline} />
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
