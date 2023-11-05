import { style } from "@vanilla-extract/css";

export const det = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  marginBottom: "16px",
  borderRadius: "6px",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  padding: "16px",
});

export const selected = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  marginBottom: "16px",
  borderRadius: "6px",
  border: "1px solid  #4299e1",
  boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.15)",
  padding: "16px",
});

export const detHeader = style({
  display: "flex",
  justifyContent: "space-between",
});

export const title = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const titleContainer = style({
  display: "flex",
  justifyContent: "space-between",
});

export const titleText = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "0.5rem",
  maxWidth: "79.9%",
});

export const button = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
});

export const content = style({
  display: "flex",
});

export const text = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const detContent = style({
  display: "flex",
  justifyContent: "space-between",
});

export const detail = style({
  display: "flex",
  flexDirection: "column",
});

export const top = style({
  display: "flex",
  alignItems: "center",
});

export const opacity = style({
  opacity: "0.5",
});
