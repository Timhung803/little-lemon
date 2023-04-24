import React, { useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";
import Main from "../components/Main";
import "./BookingPage.css";

function BookingPage() {
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
    // console.log(availableTimes);
    return availableTimes.map((time) => (
      <option key={time} defaultValue={time}>
        {time}
      </option>
    ));
  };

  function validateState(state) {
    return availability.time.length > 0;
  }
  return (
    <booking>
      {/* <BookingDetail /> */}
      <section className="reservations">
        <h1>Reservations</h1>
        <BookingForm
          handleAvailable={handleAvailable}
          initializeTimes={initializeTimes}
          validateState={validateState}
          {...availability}
        />
      </section>
      <Main />
    </booking>
  );
}

export default BookingPage;
