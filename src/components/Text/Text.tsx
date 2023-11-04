import React from "react";
import * as styles from "./Text.css";

type TextProps = {
  children: React.ReactNode;
  title?: boolean;
  secondary?: boolean;
};

const Text: React.FC<TextProps> = ({ children, title, secondary }) => {
  const style: React.CSSProperties = {};

  if (title) {
    style.fontSize = "32px";
    style.fontWeight = "600";
    style.color = "#2e3f51";
  } else if (secondary) {
    style.fontSize = "16px";
    style.fontWeight = "600";
    style.color = "#FFFFFF";
  }

  return (
    <span className={styles.text} style={style}>
      {children}
    </span>
  );
};

export default Text;
