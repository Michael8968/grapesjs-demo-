import React from 'react';
import { Editor } from 'grapesjs';

interface TopBarProps {
  editor: Editor;
}

const TopBar: React.FC<TopBarProps> = ({ editor }) => {
  return (
    <div className="h-[60px] bg-gray-800 text-white flex items-center px-4 justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">网页构建器</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700">
            保存
          </button>
          <button className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700">
            预览
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <select className="bg-gray-700 px-2 py-1 rounded">
          <option value="Desktop">桌面端</option>
          <option value="Tablet">平板端</option>
          <option value="Mobile">移动端</option>
        </select>
        <button className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700">
          撤销
        </button>
        <button className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700">
          重做
        </button>
      </div>
    </div>
  );
};

export default TopBar; 