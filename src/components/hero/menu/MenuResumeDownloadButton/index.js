import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import "components/hero/menu/MenuResumeDownloadButton/styles.scss";

function MenuResumeDownloadButton() {
  return (
    <a
      className="menu-download-link"
      href={require("assets/CV_LE_RALL_en.pdf")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="menu-download-link-container">
        <DownloadForOfflineIcon />
        Resume
      </div>
    </a>
  );
}

export default MenuResumeDownloadButton;
