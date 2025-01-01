<template>
    <div class="burning-container">
      <!-- 在这个页面内显示 iframe 内容 -->
      <div class="iframe-wrapper">
        <iframe :src="burningIframeSrc" width="100%" height="800px" frameborder="0"></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Burning',
    data() {
      return {
        burningIframeSrc: '/html/index.html', // 假设 burning.html 存放在 public 文件夹
      };
    },
  };
  </script>
  
  <style>
  .burning-container {
    padding: 0px; /* 给内容添加内边距 */
  }
  
  .iframe-wrapper {
    position: relative;
    width: 100%;
    height: 700px;
    background-color: #f0f0f0; /* 设置一个背景色 */
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  </style>
  