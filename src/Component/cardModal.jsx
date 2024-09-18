import React from 'react';

const Modal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl">
        <h2 className="text-xl font-bold mb-4">{certificate.title}</h2>
        <img src={certificate.image} alt={certificate.title} className="mb-4" />
        <p className="text-sm mb-4">Tags: {certificate.tags.join(', ')}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
