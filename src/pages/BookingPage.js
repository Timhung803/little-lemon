import React from "react";
import BookingForm from "../components/BookingForm";
import Main from "../components/Main";
import "./BookingPage.css";
import BookingDetail from "./BookingDetail";

function BookingPage() {
  return (
    <booking>
      {/* <BookingDetail /> */}
      <section className="reservations">
        <h1>Reservations</h1>
        <BookingForm />
      </section>
      <Main />
    </booking>
  );
}

export default BookingPage;
