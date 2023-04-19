import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const timeoptions = [
  { label: "Booking Time", value: "Booking Time", disabled: "true" },
  { label: "12:00 pm", value: "12:00 pm", available: "" },
  { label: "13:00 pm", value: "13:00 pm", available: "" },
  { label: "14:00 pm", value: "14:00 pm", available: "" },
  { label: "15:00 pm", value: "15:00 pm", available: "" },
  { label: "16:00 pm", value: "16:00 pm", available: "" },
  { label: "17:00 pm", value: "17:00 pm", available: "" },
  { label: "18:00 pm", value: "18:00 pm", available: "" },
  { label: "19:00 pm", value: "19:00 pm", available: "" },
  { label: "20:00 pm", value: "20:00 pm", available: "" },
  { label: "21:00 pm", value: "21:00 pm", available: "" },
  { label: "22:00 pm", value: "22:00 pm", available: "" },
];

const occasionoptions = [
  { label: "Your Occasion", value: "Your Occasion", disabled: "true" },
  { label: "Birthday", value: "Birthday" },
  { label: "Anniversary", value: "Anniversary" },
  { label: "Engagement", value: "Engagement" },
];

const date = new Date();
const currentDate = date.getDate();
date.setDate(currentDate);
const Value = date.toLocaleDateString("en-CA");

const initialState = {
  location: "indoor",
  selectdate: { Value },
  bookingtime: "",
  occasion: "",
};

function reducer(state, action) {
  return { ...state, [action.input]: action.value };
}

function BookingForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(e) {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  }

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

  function validateState(state) {
    return state.bookingtime.length > 0;
  }

  const navigate = useNavigate();

  const handleBooking = (e) => {
    navigate("/detail", {
      state: {
        location: state.location,
        selectdate: state.selectdate,
        bookingtime: state.bookingtime,
        occasion: state.occasion,
        options,
      },
    });
    e.preventDefault();
  };
  return (
    <bookingform>
      <fieldset id="location">
        <seating className="seating">
          <label htmlFor="location">Indoors</label>
          <input
            className="rad-seating"
            type="radio"
            name="location"
            value="indoor"
            onChange={onChange}
            defaultChecked
          />
        </seating>
        <seating className="seating">
          <label htmlFor="location">Outdoors</label>
          <input
            className="rad-seating"
            type="radio"
            name="location"
            value="outdoor"
            onChange={onChange}
          />
        </seating>
      </fieldset>
      <fieldset id="res-info">
        <bookingdate className="bookingdate">
          <label htmlFor="res-date">Select date:</label>
          <input
            className="res-date"
            type="date"
            name="selectdate"
            min={Value}
            defaultValue={Value}
            onChange={onChange}
          />
        </bookingdate>
        <guestnumber className="guestnumber">
          <label htmlFor="guest">
            <span>Number of guests:</span>
          </label>
          <guestcounter>
            <button
              className="guest-btm"
              disabled={options.guest <= 1}
              onClick={() => handleOption("guest", "d")}
            >
              -
            </button>
            <span>{options.guest}</span>
            <button
              className="guest-btm"
              onClick={() => handleOption("guest", "i")}
            >
              +
            </button>
          </guestcounter>
        </guestnumber>
      </fieldset>
      <form action="">
        <fieldset id="sel-time">
          <bookingtime className="bookingtime">
            <label htmlFor="res-time">Select time:</label>
            <select
              required="required"
              className="res-time"
              name="bookingtime"
              // type="text"
              onChange={onChange}
              defaultValue={timeoptions[0].label}
            >
              {timeoptions.map((timeoption) => (
                <option value={timeoption.value} disabled={timeoption.disabled}>
                  {timeoption.label}
                </option>
              ))}
            </select>
          </bookingtime>
          <occasion className="occasions">
            <label htmlfor="occasion">Occasion:</label>
            <select
              className="occasion"
              name="occasion"
              type="text"
              onChange={onChange}
              required="required"
              defaultValue={occasionoptions[0].label}
            >
              {occasionoptions.map((occasionoption) => (
                <option
                  value={occasionoption.value}
                  disabled={occasionoption.disabled}
                >
                  {occasionoption.label}
                </option>
              ))}
            </select>
          </occasion>
        </fieldset>
        <fieldset className="booking-btn-field">
          <button
            className={!validateState(state) ? "disabled" : "booking-button"}
            type="submit"
            onClick={handleBooking}
            disabled={!validateState(state)}
          >
            Booking Now
          </button>
        </fieldset>
      </form>
    </bookingform>
  );
}

export default BookingForm;
