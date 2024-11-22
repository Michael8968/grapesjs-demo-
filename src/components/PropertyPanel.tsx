import React from 'react';
import { Editor } from 'grapesjs';

interface PropertyPanelProps {
  editor: Editor;
}

const PropertyPanel: React.FC<PropertyPanelProps> = ({ editor }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">属性设置</h2>
      <div id="styles-container"></div>
      <div id="traits-container"></div>
    </div>
  );
};

export default PropertyPanel; 