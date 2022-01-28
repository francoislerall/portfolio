import React from "react";
import "components/body/Contact/styles.scss";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import SocialContact from "components/common/SocialContact";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <p> Want to get in touch? Contact me on LinkedIn or via email.</p>
        <SocialContact />
      </div>
      <a
      className="download-link"
      href={require("assets/CV_LE_RALL_en.pdf")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="download-link-container">
        <DownloadForOfflineIcon fontSize="large"/>
        Resume
      </div>
    </a>
    </div>
  );
}

export default Contact;
