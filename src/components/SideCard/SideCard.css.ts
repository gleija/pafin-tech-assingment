import { style } from "@vanilla-extract/css";

export const sideCard = style({
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  justifyContent: "center",
  height: "91px",
  width: "157px",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  border: "1px solid #d9ebf9",
  padding: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s",

  selectors: {
    "&:hover": {
      backgroundColor: "white",
      border: "1px solid #4299e1",
    },
  },
});
