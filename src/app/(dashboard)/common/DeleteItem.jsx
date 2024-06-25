import React, { useState } from 'react';

const DeleteItem = ({ product_id, onDelete }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/${product_id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      onDelete(product_id);
      setShowConfirmation(true);
    } catch (error) {
      setError('Failed to delete product. Please try again.'); 
      console.error('Delete Error:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleConfirm = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Are you sure you want to delete this item?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default DeleteItem;
