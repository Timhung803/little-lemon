import React from "react";
import BookingForm from "../components/BookingForm";

function BookingPage() {
  return (
    <booking>
      <h1>Reservations</h1>
      <BookingForm />
    </booking>
  );
}

export default BookingPage;

// <form style="display: grid; max-width: 200px; gap: 20px">
//    <input type="submit" value="Make Your reservation">
// </form>
