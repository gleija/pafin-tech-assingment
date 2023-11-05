import React from "react";
import "./index.css";

interface ButtonProps {
  onClick: () => void;
  actionLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  actionLabel,
}) => {
  return (
    <button className="my-button" onClick={onClick}>
      {actionLabel}
    </button>
  );
};

export default Button;
