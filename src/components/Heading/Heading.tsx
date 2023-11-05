import React from "react";
import * as styles from "./Heading.css";
import classNames from "classnames";

type HeadingProps = {
  children: React.ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading: React.FC<HeadingProps> = ({ children, level }) => {
  const headingClassName = classNames(
    styles.heading,
    styles[`${level}Style`] // Define styles in  css for each level ( => h1-style, h2-style)
  );

  return React.createElement(level, { className: headingClassName }, children);
};
