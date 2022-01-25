import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
// FROM FIREBASE CONFIG FILE
import { getEmployees } from "../firebase";
// CSS
import "../styles/pages/employeelist.scss";
// REACT IMPORTED PLUGIN #3
import { createTheme } from "react-data-table-component";
import styled from "styled-components";
const DataTable = lazy(() => import("react-data-table-component"));

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  /* eslint-disable */
  useEffect(() => {
    getEmployees(setEmployees);
  });

  const [filterText, setFilterText] = React.useState("");

  const filteredDatas = employees.filter(
    (item) =>
      item.lastName &&
      item.lastName.toLowerCase().includes(filterText.toLowerCase())
  );

  // TRIGGER AND SEND BACK THE RESULTS FROM THE FILTER
  const subHeaderSearch = React.useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);

  // TABLE ENTRIES
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
        <div id="employee-div" className="container-list">
          <h1>Current Employees</h1>
          <table id="employee-table" className="display"></table>
          <Suspense fallback={renderLoader()}>
            <DataTable
              data={filteredDatas}
              columns={columns}
              persistTableHead
              fixedHeader
              fixedHeaderScrollHeight="800px"
              subHeader
              subHeaderComponent={subHeaderSearch}
              pagination
              paginationComponentOptions={paginationComponentOptions}
              responsive={true}
              theme="custom"
              customStyles={customStyles}
            />
          </Suspense>
          <Link to="/" from="/employees">
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}

// INPUT FILTER FROM THE HEADER
const FilterComponent = ({ filterText, onFilter }) => (
  <React.Fragment>
    <TextField
      id="search"
      type="text"
      placeholder="Search in Last Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
  </React.Fragment>
);

// OPTIONS FOR THE PAGINATION
const paginationComponentOptions = {
  rowsPerPageText: "Show",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "All",
};

// OPTIONS FOR THE FIELDS INSIDE THE TABLE
const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
`;

// CUSTOMIZED THEME FOR THE TABLE
// PART 1
createTheme("custom", {
  text: {
    fontSize: "15px",
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
// PART 2
const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      fontSize: "15px",
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      fontSize: "12px",
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const renderLoader = () => (
  <div className="loading">
    <p>Loading</p>
  </div>
);
