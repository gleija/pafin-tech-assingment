import { style } from "@vanilla-extract/css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  marginBottom: "16px",
  borderRadius: "6px",
  boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.15)",
  width: "100%",
  padding: "16px",
});

export const cardHeader = style({
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
});

export const titleText = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: '12px',
});

export const content = style({
  display: "flex",
  alignItems: "center",
});

export const progressContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const progressBar = style({
  display: "flex",
  gap: "16px",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const progressItems = style({
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

export const progressBarBar = style({
  width: "60px",
  height: "6px",
  borderRadius: "8px",
  backgroundColor: "#dee1e3",
  position: "relative",
});

export const progressBarPercentage = style({
  height: "100%",
  borderRadius: "8px",
  backgroundColor: "#38c97c",
  position: "absolute",
  width: "50%",
});

export const contentVisible = style({
  paddingTop: "16px",
});

export const description = style({
  display: "flex",
  paddingTop: "16px",
});
