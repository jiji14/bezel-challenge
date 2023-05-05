import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import InfoTextLine from "./InfoTextLine";
import "./ConfirmModal.css";

function ConfirmModal({ item, closeModal, acceptSale, declineSale }) {
  if (item == null) {
    return;
  }

  const sellingPrice = (item.salePriceCents / 100).toFixed(2);
  const commissionRate = (item.commissionRateBips / 100).toFixed(1);
  const commissionFee = (sellingPrice * commissionRate).toFixed(2);
  const sellerFee = (item.sellerFeeCents / 100).toFixed(2);
  const earning = (item.payoutAmountCents / 100).toFixed(2);

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
                <div>{item.listing?.model?.displayName}</div>
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
                content={`$${sellingPrice.toLocaleString()}`}
              />
              <InfoTextLine
                className="default-text"
                subject={`Level 1 Commission(${commissionRate}%)`}
                content={`$${commissionFee.toLocaleString()}`}
              />
              <InfoTextLine
                className="default-text"
                subject="Selling fee"
                content={`$${sellerFee.toLocaleString()}`}
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
                content={`$${earning.toLocaleString()}`}
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
