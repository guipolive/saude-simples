import React from "react";

interface I_CustomButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  width?: string;
  color: "blue" | "green" | "red";
}

export const CustomButton = (props: I_CustomButtonProps) => {
  const CustomButtonStyles: React.CSSProperties = {
    borderRadius: "20%",
    padding: "5px 15px",
    width: props.width ?? "100%",
    color: "white",
    backgroundColor: makeButtonColor(),
  };

  function makeButtonColor() {
    switch (props.color) {
      case "blue":
        return "#3f51b5";
      case "green":
        return "#0d6f2a";
      case "red":
        return "#d06262";
    }
  }

  return (
    <button
      disabled={props.disabled ?? false}
      onClick={props.onClick}
      className="CustomButton"
      style={CustomButtonStyles}
    >
      {props.text}
    </button>
  );
};
