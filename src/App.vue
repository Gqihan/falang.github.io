<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="logo">灵动琅彩</div>
        <ul class="nav-links">
          <li><router-link to="/">主页</router-link></li>
          <li><router-link to="/Map">历史进程</router-link></li>
          <li><router-link to="/Search">检索</router-link></li>
          <li><a href="#" @click="loadBurningContent">烧制</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    loadBurningContent() {
      // 跳转到烧制页面
      this.$router.push('/Burning');
    },
  },
};
</script>


<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* 导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* 允许换行以适应小屏幕 */
  padding: 10px 20px;
  background-color: #6b4f4f; /* 棕色背景 */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.nav-links li a {
  text-decoration: none;
  color: inherit; /* 保持白色 */
}

/* logo 样式 */
.logo {
  font-size: 35px; /* 增加字体大小 */
  font-family: 'Noto Serif CJK', serif; /* 文化感的字体 */
  font-weight: bold; /* 加粗 */
  color: #fff; /* 白色 */
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4), -3px -3px 10px rgba(0, 0, 0, 0.4); /* 阴影效果，增添层次感 */
  margin-bottom: 10px;
  letter-spacing: 4px; /* 字母间距，增加艺术感 */
}

/* 覆盖样式，使 iframe 浮动在页面上 */
.overlay {
  position: fixed; /* 固定位置 */
  top: 0; /* 距离页面顶部 0px */
  left: 0; /* 距离页面左边 0px */
  width: 100%; /* 占满整个宽度 */
  height: 100%; /* 占满整个高度 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 9999; /* 确保覆盖在最上层 */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column; /* 垂直布局 */
    align-items: flex-start; /* 左对齐 */
  }

  .nav-links {
    flex-direction: column; /* 垂直排列导航项 */
    gap: 10px; /* 调整垂直间距 */
    width: 100%; /* 占满可用宽度 */
    margin-top: 10px;
  }

  .nav-links li {
    text-align: left; /* 文本左对齐 */
    padding: 5px 0;
  }
}
</style>
