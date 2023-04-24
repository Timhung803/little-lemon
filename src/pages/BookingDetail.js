import React, { useState } from "react";
import FormInput from "../components/FormInput";
import "./BookingDetail.css";
import { useLocation, useNavigate } from "react-router-dom";

function BookingDetail() {
  // const location = useLocation();

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
      errorMessage: " ",
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
      type: "tel",
      errorMessage: "Please enter a vaild phone number!",
      placeholder: "Phone Number",
      className: "input",
      label: "*Phone",
      pattern: "[0-9]{3}[0-9]{3}[0-9]{3,5}",
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

  function validateConfirm() {
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3,5})$/;
    return (
      formValue.firstname.length >= 2 &&
      regexEmail.test(formValue.email) === true &&
      regexPhone.test(formValue.phone) === true
    );
  }
  // console.log(formValue.phone.toString());

  const navigate = useNavigate();
  const navigateToChange = () => {
    navigate("/booking");
  };

  const handleConfirm = (e) => {
    navigate("/confirmation", {
      state: {
        formValue,
      },
    });
    e.preventDefault();
  };

  return (
    <div className="bookingdetail">
      {/* <tabledetail>
        <h1>Table Detail</h1>
        <p>
          <strong>Date:</strong> {location.state.availability.date}
        </p>
        <p>
          <strong>Time:</strong> {location.state.availability.time}
        </p>
        <p>
          <strong>Number of guests:</strong> {location.state.options.guest}
        </p>
        <p>
          <strong>Seating:</strong> {location.state.location}
        </p>
        <p>
          <strong>Occasion:</strong> {location.state.occasion}
        </p>
        <button className="btn-change" onClick={navigateToChange}>
          Change
        </button>
      </tabledetail> */}
      <form onSubmit={handleSubmit} className="contactform">
        <h1>Your Contact</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formValue[input.name]}
            onChange={onChange}
            required
            aria-label={input.label}
          />
        ))}
        <hr />
        <fieldset className="formrequest">
          <label
            className="requestlabel"
            htmlFor="special-requests"
            aria-label="special-requests"
          >
            Special Requests:
          </label>
          <textarea
            className="requesttext"
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
            type="text"
            placeholder="Any Special Requests?"
            aria-label="Any Special Requests?"
            rows="3"
          ></textarea>
        </fieldset>
        <button
          onClick={handleConfirm}
          aria-label="On Click"
          disabled={!validateConfirm()}
          className={!validateConfirm() ? "disabled" : "booking-button"}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default BookingDetail;
