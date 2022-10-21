import React from "react";

import "./Cards.css";
import Card from "./Card";

function Cards() {
  return (
    <div className="container">
      <Card
        img="images/france.jpg"
        place="France"
        date="20-May-2020"
        text="Franța, recunoscută în mod oficial ca Republica Franceză, este o republică constituțională unitară având un mod de guvernare semi-prezidențial, mare parte din teritoriul său și din populație fiind situată în Europa de Vest."
      />
      <Card
        img="images/germany.jpg"
        place="Germany"
        date="16-Apr-2021"
        text="Republica Federală Germania, acronim RFG, colocvial, Germania, este un stat în Europa Centrală. Face parte din organizații internaționale importante."
      />
      <Card
        img="images/italy.jpg"
        place="Italy"
        date="19-Aug-2022"
        text="Italia, oficial Republica italiană, este un stat unitar, republică parlamentară, aflat în Europa de Sud. Ea acoperă o arie de 301.338 km² și are o climă temperată; datorită formei părții sale continentale, este denumită pe plan intern lo Stivale."
      />
    </div>
  );
}

export default Cards;
