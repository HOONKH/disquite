import React from "react";

const ModalShareTalk = ({ isOpen, onModalClose }) => {
  return (
    <div>
      {isOpen && (
        <div className="w-[720px] h-[720px] fixed left-1/2 -translate-x-1/2 top-24 bg-yellow-100">
          <button onClick={onModalClose}>Back</button>
        </div>
      )}
    </div>
  );
};

export default ModalShareTalk;
