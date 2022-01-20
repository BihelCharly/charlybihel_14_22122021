// SELECT LIST FOR STATES
const states = require("ustates");

const newArray = Object.entries(states).map((key) => key[1]);

export const optionsState = newArray.map((element) => {
  let newOption = { value: element.code, label: element.name };
  return newOption;
});

// SELECT LIST FOR DEPARTEMENT
export const optionsDepartement = [
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "engineering", label: "Engineering" },
  { value: "human Resources", label: "Human Resources" },
  { value: "legal", label: "Legal" },
];

// CUSTOM STYLE FOR SELECT LISTS
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "grey",
    padding: 5,
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "rgba(235, 235, 235, 0.808)",
    borderRadius: "25px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "rgb(112, 161, 112)",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
};
