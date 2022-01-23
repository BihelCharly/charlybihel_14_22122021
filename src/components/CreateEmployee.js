import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//PLUGIN FROM MY PERSONNAL NPM PACKAGE
import { Modal } from "react-simple-modal-cb";
// REACT IMPORTED PLUGIN #1
import {
  optionsDepartement,
  optionsState,
  customStyles,
} from "../plugins/selectOptions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// REACT IMPORTED PLUGIN #2
import Select from "react-select";
// FIREBASE
import { createEmployee } from "../firebase";
// CSS
import "../styles/components/createemployee.scss";

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
  // MODAL
  const [showModal, setShowModal] = useState(false);
  const setText = "Employee created !";

  // TRIGGER WHEN THE FORM SENDING
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    createEmployee(
      firstName,
      lastName,
      birthDate,
      startDate,
      street,
      city,
      zipCode,
      selectedOptionDepartement,
      selectedOptionState
    );
  };

  // TRIGGER WHEN THE MODAL CLOSING
  const handleOnClose = () => {
    setShowModal(false);
    navigate("/employees");
  };

  return (
    <div className="container-create">
      <h1>Create Employee</h1>
      <form id="create-employee" onSubmit={handleOnSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          required
          minLength={2}
          type="text"
          id="first-name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          required
          minLength={2}
          type="text"
          id="last-name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <label htmlFor="date-of-birth">
          Date of Birth
          <DatePicker
            required
            id="date-of-birth"
            dateFormat="dd/MM/yyyy"
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            placeholderText="Select..."
          />
        </label>
        <label htmlFor="start-date">
          Start Date
          <DatePicker
            required
            id="start-date"
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select..."
          />
        </label>
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input
            required
            minLength={4}
            id="street"
            type="text"
            onChange={(event) => setStreet(event.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            required
            minLength={3}
            id="city"
            type="text"
            onChange={(event) => setCity(event.target.value)}
          />
          <label htmlFor="state">
            State
            <Select
              required
              name="state"
              id="state"
              type="text"
              defaultValue={selectedOptionState}
              onChange={setSelectedOptionState}
              options={optionsState}
              styles={customStyles}
            />
          </label>
          <label htmlFor="zip-code">Zip Code</label>
          <input
            required
            id="zip-code"
            type="number"
            onChange={(event) => setZipCode(event.target.value)}
          />
        </fieldset>
        <label htmlFor="department">
          Department
          <Select
            name="departement"
            id="departement"
            type="text"
            defaultValue={selectedOptionDepartement}
            onChange={setSelectedOptionDepartement}
            options={optionsDepartement}
            styles={customStyles}
          />
        </label>
        <button type="submit" className="saveButton">
          Save
        </button>
      </form>
      {/*PLUGIN FROM MY PERSONNAL NPM PACKAGE*/}
      <Modal text={setText} show={showModal} onClose={handleOnClose} />
    </div>
  );
}
