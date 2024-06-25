import React, { useEffect } from 'react';

const MessageFrom = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  let bgColorClass = '';
  if (type === 'error') {
    bgColorClass = 'bg-red-500';
  } else if (type === 'success') {
    bgColorClass = 'bg-green-500';
  }

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center">
      <div className={`message ${bgColorClass}`}>
        {message}
      </div>
    </div>
  );
}

export default MessageFrom;
