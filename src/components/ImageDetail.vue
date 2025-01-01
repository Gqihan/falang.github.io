<template>
  <div>
    <h2>展品详细信息</h2>
    <div v-if="image">
      <!-- 通过 require 或 import 动态加载图片 -->
      <img :src="getImageUrl(image.path)" :alt="image.name" />
      <h3>{{ image.name }}</h3>
      <p>这里是展品的详细描述。</p>
    </div>
    <div v-else>
      <p v-if="loading">加载中...</p>
      <p v-else>无法加载展品。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
      loading: true, // 加载状态
    };
  },
  mounted() {
    this.loadImageDetail();
  },
  methods: {
  async loadImageDetail() {
    const imageName = this.$route.params.imageName; // 获取 URL 中的参数
    try {
      const response = await fetch('/data.json'); // 从 public 文件夹加载 JSON 数据
      const data = await response.json();
      // 根据名称找到对应的图片数据
      this.image = data.find(item => item.name === decodeURIComponent(imageName));
      this.loading = false; // 加载完成
      if (!this.image) {
        console.error('没有找到匹配的展品');
      }
    } catch (error) {
      console.error('加载展品数据失败:', error);
      this.loading = false;
    }
  },
  // 使用 import.meta.url 动态加载图片
  getImageUrl(path) {
    try {
      // 拼接基于 import.meta.url 的图片路径
      return new URL(`../assets/data/${path}`, import.meta.url).href;
    } catch (error) {
      console.error('图片加载失败:', error);
      return ''; // 返回空路径或默认图片路径
    }
  }
}
};
</script>
