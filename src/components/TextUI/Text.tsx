import React from "react";
import * as styles from "./Text.css";

type TextProps = {
  children: React.ReactNode;
  title?: boolean;
  secondary?: boolean;
  gray?: boolean;
  card?: boolean;
  smallTitle?: boolean;
  smallText?: boolean;
  cardTitle?: boolean;
  cardContent?: boolean;
};

export const Text: React.FC<TextProps> = ({
  children,
  title,
  secondary,
  gray,
  card,
  smallTitle,
  smallText,
  cardTitle,
  cardContent,
}) => {
  const style: React.CSSProperties = {};

  if (title) {
    style.fontSize = "32px";
  } else if (secondary) {
    style.fontSize = "16px";
    style.color = "#596269";
    style.lineHeight = "24px";
    style.fontWeight = 400;
  } else if (gray) {
    style.fontSize = "14px";
    style.color = "#8C959D";
    style.lineHeight = "21px";
  } else if (card) {
    style.fontSize = "16px";
    style.lineHeight = "21px";
  } else if (smallTitle) {
    style.fontSize = "14px";
    style.lineHeight = "21px";
  } else if (smallText) {
    style.fontSize = "12px";
    style.lineHeight = "18px";
    style.fontWeight = 400;
    style.color = "#596269";
  } else if (cardTitle) {
    style.fontSize = "20px";
    style.lineHeight = "26px";
  } else if (cardContent) {
    style.fontSize = "14px";
    style.lineHeight = "21px";
    style.fontWeight = 400;
    style.color = "#596269";
  }

  return (
    <span className={styles.text} style={style}>
      {children}
    </span>
  );
};
