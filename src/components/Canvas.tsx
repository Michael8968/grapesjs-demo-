import React from 'react';

interface CanvasProps {
  id: string;
}

const Canvas: React.FC<CanvasProps> = ({ id }) => {
  return (
    <div className="flex-1 bg-gray-50">
      <div id={id}></div>
    </div>
  );
};

export default Canvas; 