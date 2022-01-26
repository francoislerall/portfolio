import React from "react";
import GenericMenu from "components/header/menu/GenericMenu";
import "components/header/menu/WebMenu/styles.scss";

function WebMenu() {
  const theme = {
    menu: "web-options",
    option: "web-option",
    optionIcon: "web-option-icon",
  };

  return <GenericMenu theme={theme} />;
}

export default WebMenu;
