import React from "react";
import { boxDefault } from "./Box.css";

type BoxProps = {
  component?: "div" | "span";
  children: React.ReactNode;
  className?: string;
};

/**
 * Box component renders a basic HTML element (div or span) with default styles and optional custom classes.
 * @param {BoxProps} props The properties for the Box component.
 * @returns {React.ReactNode} The rendered Box component.
 */
export const Box: React.FC<BoxProps> = ({
  component = "div",
  children,
  className,
}: BoxProps): React.ReactNode => {
  const Component = component; // Assign the component type to a variable for easier usage

  const boxClassNames = className || boxDefault; // Combine default and custom class names

  return <Component className={boxClassNames}>{children}</Component>; // Render the chosen component with the combined class names
};
