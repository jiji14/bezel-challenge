import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

/**
 * className: btn-with-background | btn-without-background
 * width: css width ex) 240px | 100% | 100vw ...
 */

function Button({
  className,
  onClickEvent,
  content,
  isDisabled = false,
  width = "100%",
}) {
  return (
    <button
      className={`button ${className}`}
      style={{ width: width }}
      onClick={onClickEvent}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClickEvent: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  width: PropTypes.string,
};

export default Button;
