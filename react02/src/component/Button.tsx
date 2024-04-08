import React from "react";
interface PropsType {
  children: string;
  color?: "success" | "primary" | "danger" | "info" | "warning" | "secondary";
  onClicked: () => void;
}

const Button = ({ children, color = "primary", onClicked }: PropsType) => {
  return (
    <button
      type="button"
      className={"my-3 btn btn-" + color}
      onClick={onClicked}
    >
      {children}
    </button>
  );
};

export default Button;
