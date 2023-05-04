import React, { useState } from "react";
import "./App.css";
import ConfirmModal from "./Component/ConfirmModal";
import Button from "./Component/Button";

function App() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <div className="App">
      <Button
        className="btn-with-background"
        content="Check Sale"
        onClickEvent={openConfirmModal}
      />
      {isConfirmModalOpen && <ConfirmModal closeModal={closeConfirmModal} />}
    </div>
  );
}

export default App;
