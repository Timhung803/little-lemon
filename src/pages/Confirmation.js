import React from "react";
import "./Confirmation.css";
import { useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  return (
    <confirmpage>
      <section>
        <h3>Congrats!</h3>
        <h3>{location.state.formValue.firstname}</h3>
        <p>Your Reservation has been confirmed.</p>
        <p>See you soon!</p>

        <button className="confirm-btn">See our Menu</button>
      </section>
    </confirmpage>
  );
}

export default Confirmation;
