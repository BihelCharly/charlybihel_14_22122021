import React from "react";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
//import { useLocation } from "react-router";

createTheme("custom", {
  text: {
    primary: "black",
  },
  background: {
    default: "white",
  },
  context: {
    background: "white",
    text: "#FFFFFF",
  },
  divider: {
    default: "green",
  },
});

export default function EmployeeList() {
  // const { state } = useLocation();
  // const { firstName, lastName } = state;
  // console.log(firstName);
  // console.log(lastName);
  const getObjects = localStorage.getItem("employee");
  const userFromStorage = JSON.parse(getObjects);

  const data = [
    {
      id: 1,
      firstName: userFromStorage.firstName,
      lastName: userFromStorage.lastName,
      birthDate: userFromStorage.birthDate,
      startDate: userFromStorage.startDate,
      street: userFromStorage.street,
      city: userFromStorage.city,
      usState: userFromStorage.selectedOptionState,
      zipCode: userFromStorage.zipCode,
      departement: userFromStorage.selectedOptionDepartement,
    },
  ];

  const columns = [
    {
      name: "First Name",
      selector: (column) => column.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (column) => column.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (column) => column.startDate,
      sortable: true,
    },
    {
      name: "Departement",
      selector: (column) => column.departement,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (column) => column.birthDate,
      sortable: true,
    },
    {
      name: "Street",
      selector: (column) => column.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (column) => column.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (column) => column.usState,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (column) => column.zipCode,
      sortable: true,
    },
  ];

  return (
    <main>
      <section>
        <div id="employee-div" className="container">
          <h1>Current Employees</h1>
          <table id="employee-table" className="display"></table>
          <DataTable columns={columns} data={data} theme="custom" />
          <Link to="/">Home</Link>
        </div>
      </section>
    </main>
  );
}
