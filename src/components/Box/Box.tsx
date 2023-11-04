import React from "react";
import * as styles from "./Box.css";

type BoxProps = {
  component?: "div" | "span";
  children: React.ReactNode;
  className?: string;
};

const Box: React.FC<BoxProps> = ({
  component = "div",
  children,
  className,
}) => {
  const Component = component;

  const boxClassNames = className || styles.boxDefault;

  return <Component className={boxClassNames}>{children}</Component>;
};

export default Box;
