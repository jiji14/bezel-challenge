import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import InfoTextLine from "./InfoTextLine";
import "./ConfirmModal.css";

function ConfirmModal({ item, closeModal, acceptSale, declineSale }) {
  if (!item) {
    return null;
  }

  /**
   * Takes a number and returns it in USD currency format.
   * @param {number} num
   * @returns {string}
   */
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
    <div className="modal layout-center">
      <div className="modal-wrapper">
        <span className="modal-close-icon" onClick={closeModal}>
          &times;
        </span>
        <main className="modal-content-wrapper">
          <section className="modal-left-content">
            <div>
              <b className="modal-left-silver-text">CONGRATS!</b>
              <div className="modal-left-title">Your watch sold!</div>
              <p className="modal-left-desc">
                You have 1 business day to accept the sale. <br />
                If you do not accept, it will be automatically rejected.
              </p>
            </div>
            <div className="modal-left-btn-wrapper">
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
          </section>
          <section className="modal-right-content">
            <div
              className="modal-right-content-item"
              id="modal-right-img-wrapper"
            >
              <div>
                <h1 className="modal-right-title">
                  {`${brand?.displayName} ${displayName} ${referenceNumber}`}
                </h1>
                <div>
                  {`${item.listing?.condition} / 
                  ${item.listing?.created?.slice(0, 4) ?? ""}`}
                </div>
              </div>
              <img
                className="modal-right-img"
                src={item.listing?.images[0]?.image?.url}
                alt="watch"
              />
            </div>
            <div className="modal-right-content-item">
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
            <div className="modal-right-content-item">
              <InfoTextLine
                className="bold-text"
                subject="Earnings"
                content={earning}
              />
            </div>
          </section>
        </main>
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
