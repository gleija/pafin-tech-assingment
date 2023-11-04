import { style } from "@vanilla-extract/css";

export const body = style({
  backgroundColor: "#EEF4FA",
  height: "100%",
  width: "100%",
});

export const main = style({
  margin: "0px 112px 0px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "83.3%",
  height: "100vh",
});

export const text = style({
  margin: "60px 0 32px 0",
});
