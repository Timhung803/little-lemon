import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
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
    occasion: "",
  };

  function reducer(state, action) {
    return { ...state, [action.input]: action.value };
  }
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

  const [availability, setAvailability] = useState({
    date: "",
    time: "",
  });

  const handleAvailable = (e) => {
    const { name, value } = e.target;
    setAvailability({ ...availability, [name]: value });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";
    document.body.appendChild(script);
    return () => document.body.appendChild(script);
  }, []);

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const initializeTimes = () => {
    const availableTimes = fetchAPI(new Date(availability.date));
    console.log(availableTimes);
    return availableTimes.map((time) => (
      <option key={time} defaultValue={time}>
        {time}
      </option>
    ));
  };

  function validateState(state) {
    return availability.time.length > 0;
  }

  const navigate = useNavigate();

  const handleBooking = (e) => {
    navigate("/detail", {
      state: {
        location: state.location,
        occasion: state.occasion,
        options,
        availability,
      },
    });
    e.preventDefault();
  };

  return (
    <bookingform>
      <div id="date-time"></div>
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
          <label htmlFor="date">Select date:</label>
          <input
            className="res-date"
            name="date"
            type="date"
            min={Value}
            value={availability.date}
            defaultValue={Value}
            onChange={handleAvailable}
            required
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
            <label htmlFor="time">Select time:</label>
            <select name="time" onChange={handleAvailable} className="res-time">
              <option key="default" defaultValue="">
                Available time
              </option>
              {initializeTimes()}
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
