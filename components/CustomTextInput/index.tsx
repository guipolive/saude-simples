import React from "react";

interface I_CustomTextInput {
  label?: string;
  value: string;
  onChange: (e: any) => void;
}

export const CustomTextInput = (props: I_CustomTextInput) => {
  const renderLabel = () => {
    if (props.label == null) return null;

    return <label style={LabelStyles}>{props.label}</label>;
  };

  const CustomTextInputStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const LabelStyles: React.CSSProperties = {
    color: "white",
    fontSize: "12px",
  };

  const InputStyles: React.CSSProperties = {
    borderRadius: "5px",
    padding: "5px 10px",
    border: "none",
    marginTop: 5,
  };

  return (
    <div className="CustomTextInput" style={CustomTextInputStyles}>
      {renderLabel()}
      <input
        type="text"
        id="custom_text_input"
        value={props.value}
        onChange={props.onChange}
        style={InputStyles}
      />
    </div>
  );
};
