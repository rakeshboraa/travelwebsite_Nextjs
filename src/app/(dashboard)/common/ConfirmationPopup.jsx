import { Button } from '@/components/ui/button';
import React from 'react';

const ConfirmationPopup = ({ isOpen, onClose, onConfirm, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  overflow-hidden inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete this product?</p>
        <div className="flex justify-end space-x-4">
          <Button onClick={onClose} variant="secondary" disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="destructive" disabled={isLoading}>
            {isLoading ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
