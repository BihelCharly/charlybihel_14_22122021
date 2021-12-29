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
