import React from 'react';
import { Editor } from 'grapesjs';

interface SidebarProps {
  editor: Editor;
}

const Sidebar: React.FC<SidebarProps> = ({ editor }) => {
  const blocks = [
    { label: '标题', content: '<h1>标题文本</h1>' },
    { label: '段落', content: '<p>段落文本</p>' },
    { label: '图片', content: '<img src="https://via.placeholder.com/150" />' },
    { label: '按钮', content: '<button class="button">按钮</button>' },
  ];

  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">组件</h2>
      <div className="grid grid-cols-2 gap-2">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="p-2 bg-white rounded shadow cursor-move hover:bg-gray-50"
            draggable
            onDragStart={(e) => {
              editor?.Blocks.add({
                label: block.label,
                content: block.content,
              });
            }}
          >
            {block.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; 