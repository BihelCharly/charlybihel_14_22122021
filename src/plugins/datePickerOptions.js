import states from "states-us";

export const optionsDepartement = [
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "engineering", label: "Engineering" },
  { value: "human Resources", label: "Human Resources" },
  { value: "legal", label: "Legal" },
];

export const optionsState = states.map((element) => {
  let newOption = { value: element.name, label: element.name };
  return newOption;
});
