import React, { useState } from "react";
import "../styles/components/createemployee.scss";
// REACT IMPORTED PLUGIN #1
import { optionsDepartement, optionsState } from "../plugins/datePickerOptions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// REACT IMPORTED PLUGIN #2
import Select from "react-select";
import { customStyles } from "../plugins/selectCustomStyle";

export default function FormCreateEmployee() {
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOptionDepartement, setSelectedOptionDepartement] =
    useState(null);
  const [selectedOptionState, setSelectedOptionState] = useState(null);
  return (
    <div className="container">
      <h1>Create Employee</h1>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input required type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input required type="text" id="last-name" />
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
          <input required id="street" type="text" />
          <label htmlFor="city">City</label>
          <input required id="city" type="text" />
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
          <input required id="zip-code" type="number" />
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
      </form>
      <button className="saveButton">Save</button>
    </div>
  );
}
