import React from "react";

interface I_HeaderLogoProps {
  title: string;
}

export const HeaderLogo = (props: I_HeaderLogoProps) => {
  const HeaderLogoStyles: React.CSSProperties = {
    borderRadius: "20px",
    backgroundColor: "#0e3c0e",
    width: 200,
    height: 200,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const HeaderLogo__containerStyles: React.CSSProperties = {
    border: "1px solid white",
    borderRadius: "20px",
    padding: "20px",
    width: 170,
    height: 170,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  };

  // const TitleStyles: React.CSSProperties = {
  //   border: "1px solid white",
  //   borderRadius: "20px",
  //   padding: "20px",
  //   width: 170,
  //   height: 170,
  // };

  const SubtitleStyles: React.CSSProperties = {
    fontSize: "12px",
    margin: "0 auto",
    marginTop: "auto",
  };

  return (
    <div className="HeaderLogo" style={HeaderLogoStyles}>
      <div
        className="HeaderLogo__container"
        style={HeaderLogo__containerStyles}
      >
        <h1>{props.title}</h1>
        <p style={SubtitleStyles}>Saúde Simples</p>
      </div>
    </div>
  );
};
