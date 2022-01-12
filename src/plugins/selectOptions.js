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
