import React from "react";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import styled from "styled-components";
//import { useLocation } from "react-router";

const getAndParseStorage = () => {
  let keys = Object.keys(localStorage),
    index = keys.length;
  while (index--) {
    return JSON.parse(localStorage.getItem(keys[index]));
  }
};

export default function EmployeeList() {
  //const data = getAndParseStorage();
  const datas = React.useMemo(() => getAndParseStorage(), []);
  // FILTERING
  const [filterText, setFilterText] = React.useState("");
  const filteredDatas = datas.filter(
    (item) =>
      item.lastName &&
      item.lastName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderSearch = React.useMemo(() => {
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
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);

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
          <DataTable
            columns={columns}
            data={filteredDatas}
            customStyles={customStyles}
            theme="custom"
            fixedHeader
            fixedHeaderScrollHeight="800px"
            subHeader
            subHeaderComponent={subHeaderSearch}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            responsive={true}
            persistTableHead
          />
          <Link to="/" from="/employees">
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}

const paginationComponentOptions = {
  rowsPerPageText: "Show",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "All",
};

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
