import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
// import TopBar from '../components/TopBar';
// import Sidebar from '../components/Sidebar';
// import PropertyPanel from '../components/PropertyPanel';
// import Canvas from '../components/Canvas';

const Home: React.FC = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const editor = grapesjs.init({
      container: editorRef.current,
      height: '100vh',
      width: 'auto',
      plugins: [], // 可在这里添加插件
      storageManager: false, // 禁用本地存储
      canvas: {
        styles: [
          'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        ],
      },
      blockManager: {
        appendTo: '#blocks', // 指定渲染位置
      },
    });

    // 添加自定义区块
    editor.BlockManager.add('my-block', {
      label: 'Simple Block',
      content: '<div class="my-block">This is a simple block</div>',
      category: 'Basic',
    });

    return () => editor.destroy();
  }, []);

  return (
    <div className="h-screen flex flex-col w-screen">
      {/* <TopBar editor={editorRef.current} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar editor={editorRef.current} />
        <Canvas id="gjs" />
        <PropertyPanel editor={editorRef.current} />
      </div> */}
          <div style={{ display: 'flex', height: '100vh' }}>
      <div id="blocks" style={{ width: '300px', borderRight: '1px solid #ddd' }}></div>
        <div ref={editorRef} style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default Home; 