import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import InfoTextLine from "./InfoTextLine";
import "./ConfirmModal.css";

function ConfirmModal({ item, closeModal, acceptSale, declineSale }) {
  if (item == null) {
    return;
  }

  const convertToUSDFormatt = (num) => {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const sellingPrice = convertToUSDFormatt(item.salePriceCents / 100);
  const commissionRate = convertToUSDFormatt(item.commissionRateBips / 100);
  const commissionFee = convertToUSDFormatt(
    ((item.salePriceCents / 100) * item.commissionRateBips) / 100 / 100
  );
  const sellerFee = convertToUSDFormatt(item.sellerFeeCents / 100);
  const earning = convertToUSDFormatt(item.payoutAmountCents / 100);
  const { brand, displayName, referenceNumber } = item.listing?.model;

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
              <div className="modal-title">Your watch sold!</div>
              <div className="modal-desc">
                You have 1 business day to accept the sale. <br />
                If you do not accept, it will be automatically rejected.
              </div>
            </div>
            <div className="modal-btn-wrapper">
              <Button
                className="btn-with-background"
                content="Accept sale"
                onClickEvent={acceptSale}
              />
              <Button
                className="btn-without-background"
                content="Reject sale"
                onClickEvent={declineSale}
              />
            </div>
          </div>
          <div className="modal-right-content">
            <div className="modal-right-column modal-img-container">
              <div className="modal-btn-wrapper">
                <div className="dark-text">
                  {brand?.displayName +
                    " " +
                    displayName +
                    " " +
                    referenceNumber}
                </div>
                <div className="default-text">
                  {item.listing?.condition} /{" "}
                  {item.listing?.created?.slice(0, 4)}
                </div>
              </div>
              <img
                className="modal-img"
                src={item.listing?.images[0]?.image?.url}
                alt="watch"
              />
            </div>
            <div className="modal-right-column">
              <InfoTextLine
                className="default-text"
                subject="Selling Price"
                content={sellingPrice}
              />
              <InfoTextLine
                className="default-text"
                subject={`Level 1 Commission(${commissionRate}%)`}
                content={commissionFee}
              />
              <InfoTextLine
                className="default-text"
                subject="Selling fee"
                content={sellerFee}
              />
              <InfoTextLine
                className="default-text"
                subject="Insured Shipping"
                content="Free"
              />
              <InfoTextLine
                className="colored-text"
                subject="Bezel authentication"
                content="Free"
              />
            </div>
            <div className="modal-right-column">
              <InfoTextLine
                className="bold-text"
                subject="Earnings"
                content={earning}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmModal.propTypes = {
  item: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  acceptSale: PropTypes.func.isRequired,
  declineSale: PropTypes.func.isRequired,
};

export default ConfirmModal;
