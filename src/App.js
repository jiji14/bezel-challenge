import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ConfirmModal from "./Component/ConfirmModal";
import Button from "./Component/Button";
import { URL_ACCEPT_SALE, URL_DECLINE_SALE, URL_GET_ITEM } from "./apiUrl";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [item, setItem] = useState(null);

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const openConfirmModal = () => {
    axios
      .get(URL_GET_ITEM)
      .then(function (response) {
        if (response.data) {
          setItem(response.data);
        }
      })
      .then(() => {
        setIsConfirmModalOpen(true);
      })
      .catch(function (error) {
        toast.error(error.message, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: true,
        });
      });
  };

  const acceptSale = () => {
    axios
      .post(URL_ACCEPT_SALE)
      .then(function (response) {
        if (response.status === 200) {
          setIsConfirmModalOpen(false);
          toast.success("You have successfully accepted the sale.", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      })
      .catch(function (error) {
        toast.error(error.message, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: true,
        });
      });
  };

  const declineSale = () => {
    axios
      .post(URL_DECLINE_SALE)
      .then(function (response) {
        if (response.status === 200) {
          setIsConfirmModalOpen(false);
          toast.success("You have successfully declined the sale.", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      })
      .catch(function (error) {
        toast.error(error.message, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: true,
        });
      });
  };

  return (
    <div className="App">
      <Button
        className="btn-with-background"
        content="Check Sale"
        onClickEvent={openConfirmModal}
      />
      {isConfirmModalOpen && (
        <ConfirmModal
          item={item}
          closeModal={closeConfirmModal}
          acceptSale={acceptSale}
          declineSale={declineSale}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
