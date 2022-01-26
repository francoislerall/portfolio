import React from "react";
import "components/body/Contact/styles.scss";
import Separator from "components/common/Separator";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import SocialContact from "components/common/SocialContact";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title"> Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p> Want to get in touch? Contact me on LinkedIn or via email.</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            href={require("assets/CV_LE_RALL_en.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadForOfflineIcon />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
