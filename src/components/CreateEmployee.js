import React from "react";
import "../styles/components/createemployee.scss";

export default function formCreateEmployee() {
  return (
    <div className="container">
      <h1>Create Employee</h1>
      <form action="#" id="create-employee">
        <label for="first-name">First Name</label>
        <input required type="text" id="first-name" />
        <label for="last-name">Last Name</label>
        <input required type="text" id="last-name" />
        <label for="date-of-birth">Date of Birth</label>
        <input required id="date-of-birth" type="text" />
        <label for="start-date">Start Date</label>
        <input required id="start-date" type="text" />
        <fieldset class="address">
          <legend>Address</legend>
          <label for="street">Street</label>
          <input required id="street" type="text" />
          <label for="city">City</label>
          <input required id="city" type="text" />
          <label for="state">State</label>
          <select name="state" id="state"></select>
          <label for="zip-code">Zip Code</label>
          <input required id="zip-code" type="number" />
        </fieldset>
        <label for="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
      <button className="saveButton">Save</button>
    </div>
  );
}
