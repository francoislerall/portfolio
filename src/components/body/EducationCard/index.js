import React from 'react';
import "components/body/EducationCard/styles.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";


function EducationCard({ education }) {
    return (
        <div className="education-card">
          <div className="education-info">
            <label className="education-title">{education.title}</label>
            <div className="education-location">
              {education.location && (
                <a
                  className="education-location-link"
                  href={education.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="location-link-button">
                    <LocationOnIcon fontSize="small"/>
                    {education.location}
                  </div>
                </a>
              )}
            </div>
            <p>{education.about}</p>
          </div>
          <img src={education.image} className="education-photo" alt="logo of the school" />
        </div>
      );
}

export default EducationCard;
