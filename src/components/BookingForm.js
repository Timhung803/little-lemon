import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const date = new Date();
  const currentDate = date.getDate();
  date.setDate(currentDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  const [bookingDate, setBookingDate] = useState({ defaultValue });
  const handleBookingDate = (e) => setBookingDate(e.target.value);

  const [time, setTime] = useState("");
  const handleSelectTime = (e) => {
    setTime(e.target.value);
  };

  const [seating, setSeating] = useState("indoor");
  const handleSeating = (e) => {
    setSeating(e.target.value);
  };

  const [occasion, setOccasion] = useState("");
  const handleOccasion = (e) => {
    setOccasion(e.target.value);
  };

  const [options, setOptions] = useState({
    guest: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [isValid, setValid] = useState(false);
  const validate = () => {
    return time.length & occasion.length;
  };
  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [time, occasion]);

  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/detail", {
      state: { options, time, occasion, seating, bookingDate },
    });
  };
  return (
    <bookingform>
      <fieldset id="location">
        <label htmlFor="location">Indoors</label>
        <input
          type="radio"
          value="indoor"
          name="location"
          checked={seating === "indoor"}
          onChange={handleSeating}
        />
        <label htmlFor="location">Outdoors</label>
        <input
          type="radio"
          value="outdoor"
          name="location"
          checked={seating === "outdoor"}
          onChange={handleSeating}
        />
      </fieldset>
      <fieldset id="res-info">
        <label htmlFor="res-date">Select date:</label>
        <input
          type="date"
          id="res-date"
          defaultValue={defaultValue}
          min={defaultValue}
          onChange={handleBookingDate}
        />
        <label htmlFor="guest">
          <span>Number of guests:</span>
          <button
            disabled={options.guest <= 1}
            onClick={() => handleOption("guest", "d")}
          >
            -
          </button>
          <span>{options.guest}</span>
          <button onClick={() => handleOption("guest", "i")}>+</button>
        </label>
      </fieldset>
      <form action="">
        <fieldset>
          <label htmlFor="res-time">Select time:</label>
          <select
            required="required"
            id="res-time "
            value={time}
            onChange={handleSelectTime}
          >
            <option disabled selected value="">
              --Please choose an option--
            </option>
            <option value="11:00 am">11:00 am</option>
            <option value="12:00 pm">12:00 pm</option>
            <option value="13:00 pm">13:00 pm</option>
            <option value="14:00 pm">14:00 pm</option>
            <option value="15:00 pm">15:00 pm</option>
            <option value="16:00 pm">16:00 pm</option>
            <option value="17:00 pm">17:00 pm</option>
            <option value="18:00 pm">18:00 pm</option>
            <option value="19:00 pm">19:00 pm</option>
            <option value="20:00 pm">20:00 pm</option>
            <option value="21:00 pm">21:00 pm</option>
            <option value="22:00 pm">22:00 pm</option>
          </select>
          <label htmlfor="occasion">Occasion:</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasion}
            required="required"
          >
            <option disabled selected value="">
              --Please choose an option--
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
          </select>
        </fieldset>
        <fieldset id="booking-buttom">
          <button type="submit" onClick={handleBooking} disabled={!isValid}>
            Booking Now
          </button>
          {/* <input type="submit" value="Booking Now" onClick={handleBooking} /> */}
        </fieldset>
      </form>
    </bookingform>
  );
}

export default BookingForm;
