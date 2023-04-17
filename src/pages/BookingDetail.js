import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "./BookingDetail.css";
import { useLocation } from "react-router-dom";

function BookingDetail() {
  const location = useLocation();

  const [bookingDate, setBookingDate] = useState(location.state.bookingDate);
  const [guest, setGuests] = useState(location.state.options);
  const [time, setTime] = useState(location.state.time);
  const [occasion, setOccasion] = useState(location.state.occasion);
  const [seating, setSeating] = useState(location.state.seating);

  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [requestText, setRequestText] = useState("");

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      errorMessage: "Please enter a vaild name!",
      placeholder: "First Name",
      className: "input",
      label: "*First Name",
      pattern: "[a-zA-Z0-9]+",
      minlength: "2",
      maxlength: "100",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      errorMessage: "",
      placeholder: "Last Name (Optional)",
      className: "input",
      label: "Last Name",
      pattern: "[a-zA-Z0-9]+",
      minlength: "2",
      maxlength: "100",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      errorMessage: "Please enter a vaild email!",
      placeholder: "Email Address",
      className: "input",
      label: "*Email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      errorMessage: "Please enter a vaild phone number!",
      placeholder: "Phone Number",
      className: "input",
      label: "*Phone",
      pattern: "^(\\d{3}[- .]?){2}\\d{4,5}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValue({ firstname: "", lastname: "", email: "", phone: "" });
    setRequestText("");
  };

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  console.log(formValue);
  return (
    <div className="bookingdetail">
      <tabledetail>
        <h1>Table Detail</h1>
        <p>
          <strong>Date:</strong> {bookingDate.Value}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Number of guests:</strong> {guest.guest}
        </p>
        <p>
          <strong>Seating:</strong> {seating}
        </p>
        <p>
          <strong>Occasion:</strong> {occasion}
        </p>
        <button className="btn-change">Change</button>
      </tabledetail>
      <form onSubmit={handleSubmit} className="contactform">
        <h1>Your Contact</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formValue[input.name]}
            onChange={onChange}
            required
          />
        ))}
        <hr />
        <fieldset className="formrequest">
          <label className="requestlabel" htmlFor="special-requests">
            Special Requests:
          </label>
          <textarea
            className="requesttext"
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
            type="text"
            placeholder="Any Special Requests?"
            rows="3"
          ></textarea>
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default BookingDetail;
