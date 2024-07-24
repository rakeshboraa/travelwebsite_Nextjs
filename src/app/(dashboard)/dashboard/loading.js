import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-transparent">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-black"></div>
    </div>
  );
};

export default Loading;
