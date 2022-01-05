import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/createemployee.scss";
import Modal from "./Modal";
// REACT IMPORTED PLUGIN #1
import { optionsDepartement, optionsState } from "../plugins/datePickerOptions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// REACT IMPORTED PLUGIN #2
import Select from "react-select";
import { customStyles } from "../plugins/selectCustomStyle";

const saveDataToLocalStorage = (data) => {
  let array = [];
  array = JSON.parse(localStorage.getItem("employee")) || [];
  array.push(data);
  localStorage.setItem("employee", JSON.stringify(array));
};

export default function FormCreateEmployee() {
  const navigate = useNavigate();
  // REACT HOOKS
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [selectedOptionDepartement, setSelectedOptionDepartement] =
    useState("");
  const [selectedOptionState, setSelectedOptionState] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOnSubmit = (event) => {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      startDate: startDate,
      street: street,
      city: city,
      usState: selectedOptionState.label,
      zipCode: zipCode,
      departement: selectedOptionDepartement.label,
    };
    saveDataToLocalStorage(employee);
    navigate("/employees");
    event.preventDefault();
    setShowModal(true);
  };

  const handleOnClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Create Employee</h1>
      <form id="create-employee" onSubmit={handleOnSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          required
          type="text"
          id="first-name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          required
          type="text"
          id="last-name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          required
          id="date-of-birth"
          dateFormat="dd/MM/yyyy"
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          placeholderText="Select..."
        />
        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          required
          id="start-date"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select..."
        />
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            required
            id="street"
            type="text"
            onChange={(event) => setStreet(event.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            required
            id="city"
            type="text"
            onChange={(event) => setCity(event.target.value)}
          />
          <label htmlFor="state">State</label>
          <Select
            required
            name="state"
            id="state"
            defaultValue={selectedOptionState}
            onChange={setSelectedOptionState}
            options={optionsState}
            styles={customStyles}
          />
          <label htmlFor="zip-code">Zip Code</label>
          <input
            required
            id="zip-code"
            type="number"
            onChange={(event) => setZipCode(event.target.value)}
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <Select
          required
          name="departement"
          id="departement"
          defaultValue={selectedOptionDepartement}
          onChange={setSelectedOptionDepartement}
          options={optionsDepartement}
          styles={customStyles}
        />
        <button type="submit" className="saveButton">
          Save
        </button>
      </form>
      <Modal show={showModal} onClose={handleOnClose} />
    </div>
  );
}
