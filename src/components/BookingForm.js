import React, { useState } from "react";

function BookingForm() {
  const date = new Date();
  const currentDate = date.getDate();
  date.setDate(currentDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  const [options, setOptions] = useState({
    guest: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation == "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <bookingform>
      <form action="">
        <fieldset id="location">
          <label htmlFor="location">Indoors</label>
          <input type="radio" value="indoors" name="location" checked />
          <label htmlFor="location">Outdoors</label>
          <input type="radio" value="outdoors" name="location" />
        </fieldset>
        <fieldset id="res-info">
          <label htmlFor="res-date">Select date:</label>
          <input
            type="date"
            id="res-date"
            defaultValue={defaultValue}
            min={defaultValue}
            required
          />
          <label htmlFor="res-time">Select time:</label>
          <select id="res-time ">
            <option value=""> --Please choose an option-- </option>
            <option value="11">11:00 am</option>
            <option value="12">12:00 pm</option>
            <option value="13">13:00 pm</option>
            <option value="14">14:00 pm</option>
            <option value="15">15:00 pm</option>
            <option value="16">16:00 pm</option>
            <option value="17">17:00 pm</option>
            <option value="18">18:00 pm</option>
            <option value="19">19:00 pm</option>
            <option value="20">20:00 pm</option>
            <option value="21">21:00 pm</option>
            <option value="22">22:00 pm</option>
          </select>
          {/* <label htmlfor="guests">Number of guests:</label>
          <input type="number" placeholder="2" min="2" max="100" id="guests" /> */}
          <label htmlFor="guests">
            <span>Number of guests:</span>
            <button
              disabled={options.guest <= 1}
              onClick={() => handleOption("guest", "d")}
            >
              -
            </button>
            <span>{`${options.guest}`}</span>
            <button onClick={() => handleOption("guest", "i")}>+</button>
          </label>
          <label htmlfor="occasion">Occasion:</label>
          <select id="occasion">
            <option value=""> --Please choose an option-- </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
          </select>
        </fieldset>
        <fieldset id="booking-buttom">
          <input type="reset" value="Reset" />
          <input type="submit" value="Booking Now" />
        </fieldset>
      </form>
    </bookingform>
  );
}

export default BookingForm;
