import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function BookingDetailPage() {
  const location = useLocation();
  console.log(location);

  const [bookingDate, setBookingDate] = useState(location.state.bookingDate);
  const [guest, setGuests] = useState(location.state.options);
  const [time, setTime] = useState(location.state.time);
  const [occasion, setOccasion] = useState(location.state.occasion);
  const [seating, setSeating] = useState(location.state.seating);

  return (
    <bookingdetail>
      <p>You have chosen {seating} seating.</p>
      <p>Date: {bookingDate.defaultValue}</p>
      <p>Time: {time}</p>
      <p>Number of guests: {guest.guest}</p>
      <p>Occasion: {occasion}</p>
    </bookingdetail>
  );
}

export default BookingDetailPage;
