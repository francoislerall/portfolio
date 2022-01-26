import React, { useState } from "react";
import "components/common/SocialContact/styles.scss";
import { SocialData } from "data/social";
import CheckIcon from '@mui/icons-material/Check';

function SocialContact() {
  const socialData = SocialData;
  const [copySuccess, setCopySuccess] = useState(false);
  const [cursorHover, setCursorHover] = useState(false);

  return (
    <div className="social-contact">
      {socialData.map((item) => {
        return (
          <div>
            {item.type == "website" && (
              <div className="icon-and-copy-box">
                <div className="copy-box-div">
                  <div className="copy-message-box"></div>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-div">
                    <img src={item.icon} className="social-icon" />
                  </div>
                </a>
              </div>
            )}
            {item.type == "mail" && (
              <div className="icon-and-copy-box">
                <div className="copy-box-div">
                  {!cursorHover && !copySuccess && (
                    <div className="copy-message-box"></div>
                  )}
                  {cursorHover && !copySuccess && (
                    <div className="copy-message-box">Click to copy</div>
                  )}
                  {cursorHover && copySuccess && (
                    <div className="copied-message-box"><CheckIcon fontSize="small" /> Copied</div>
                  )}
                </div>
                <div
                  className="social-icon-div"
                  onMouseOver={() => setCursorHover(true)}
                  onMouseLeave={() => {
                    setCursorHover(false);
                    setCopySuccess(false);
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(item.link);
                    setCopySuccess(true);
                  }}
                >
                  <img src={item.icon} className="social-icon" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SocialContact;
