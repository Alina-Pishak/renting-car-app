export const selectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderRadius: "14px",
    background: " #F7F7FB",
    width: "224px",
    height: "48px",
    outline: isFocused ? "none" : "none",
    border: isFocused ? "none" : "none",
    borderColor: isFocused ? "transparent" : "transparent",
    color: "#121417",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 1.1,
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: "pointer",
      color: isSelected || isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
      background: "none",
      fontSize: "16px",
      fontWight: 500,
      lineHeight: 1.2,
    };
  },
  menu: (styles) => ({
    ...styles,
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    background: "#fff",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#121417",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 1.1,
  }),
};
