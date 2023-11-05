import { style } from "@vanilla-extract/css";

export const main = style({
  fontFamily: "Noto Sans JP, sans-serif",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  height: "100vh",
  marginLeft: "112px",
  maxWidth: "84.4%",
});

export const top = style({
  marginTop: "60px",
  marginBottom: "16px",
});
