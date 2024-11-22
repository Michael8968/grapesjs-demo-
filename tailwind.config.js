/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // 匹配所有可能用到 Tailwind 的文件
    ],
    theme: {
      extend: {}, // 可用于自定义主题
    },
    plugins: [],
};
  