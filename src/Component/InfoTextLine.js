import React from "react";
import PropTypes from "prop-types";
import "./InfoTextLine.css";

/**
 * className: default-text | colored-text | bold-text
 */

function InfoTextLine({ className, subject, content }) {
  return (
    <div className={`text-wrapper ${className}`}>
      <div>{subject}</div>
      <div>{content}</div>
    </div>
  );
}

InfoTextLine.propTypes = {
  className: PropTypes.string,
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default InfoTextLine;
