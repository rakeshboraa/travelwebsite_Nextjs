import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
