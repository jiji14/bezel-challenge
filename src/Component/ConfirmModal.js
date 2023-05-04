import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import InfoTextLine from "./InfoTextLine";
import "./ConfirmModal.css";

function ConfirmModal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <span className="modal-close" onClick={closeModal}>
          &times;
        </span>
        <div className="modal-content-wrapper">
          <div className="modal-left-content">
            <div className="left-content-desc-wrapper">
              <div className="modal-gray-text">CONGRATS!</div>
              <div className="modal-title">Your watch Sold!</div>
              <div>
                You have 1 business day to accept the sale. <br />
                If you do not accept, it will be automatically rejected.
              </div>
            </div>
            <div className="modal-btn-wrapper">
              <Button className="btn-with-background" content="Accept sale" />
              <Button
                className="btn-without-background"
                content="Reject sale"
              />
            </div>
          </div>
          <div className="modal-right-content">
            <div className="modal-right-column modal-img-container">
              <div className="modal-btn-wrapper">
                <div>Rolex DeepSea Sea-Dweller James Cameron 116660</div>
                <div className="default-text">New / 2014</div>
              </div>
              <img
                className="modal-img"
                src="https://getbezel.mo.cloudinary.net/sandbox/96895358-2f6a-468a-88cd-c65a804dc8da.png"
                alt="watch"
              />
            </div>
            <div className="modal-right-column">
              <InfoTextLine
                className="default-text"
                subject="Selling Price"
                content="$17,945.00"
              />
              <InfoTextLine
                className="default-text"
                subject="Selling Price"
                content="$17,945.00"
              />
              <InfoTextLine
                className="default-text"
                subject="Selling Price"
                content="$17,945.00"
              />
              <InfoTextLine
                className="default-text"
                subject="Selling Price"
                content="$17,945.00"
              />
              <InfoTextLine
                className="colored-text"
                subject="Selling Price"
                content="$17,945.00"
              />
            </div>
            <div className="modal-right-column">
              <InfoTextLine
                className="bold-text"
                subject="Earnings"
                content="$22,378.25"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ConfirmModal;
