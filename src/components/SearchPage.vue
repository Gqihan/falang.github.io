<template>
  <div>
    <div class="search-container">
      <input 
        v-model="searchQuery" 
        placeholder="请输入名称或关键字" 
        @input="searchImages" 
        @keyup.enter="searchImages" 
        class="search-input"
      />
    </div>
    
    <div class="image-gallery">
      <div v-if="filteredImages.length === 0">暂无结果</div>
      <div 
        v-for="(image, index) in currentImages" 
        :key="index" 
        class="image-item" 
        @click="goToDetailPage(image)"
      >
        <img :src="image.path" :alt="image.name" />
        <div class="image-name">{{ image.name }}</div>
      </div>
    </div>
    
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">上一页</button>
      <span>第 {{ currentPage }} 页</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [], // 存储图片数据
      searchQuery: '', // 用户输入的搜索关键字
      filteredImages: [], // 根据搜索条件过滤后的图片数据
      currentPage: 1, // 当前页码
      imagesPerPage: 30 // 每页显示的图片数量
    };
  },
  mounted() {
    this.loadImageData(); // 加载图片数据
  },
  computed: {
    // 计算分页后的当前页面图片
    currentImages() {
      const start = (this.currentPage - 1) * this.imagesPerPage;
      const end = this.currentPage * this.imagesPerPage;
      return this.filteredImages.slice(start, end);
    },
    // 计算总页数
    totalPages() {
      return Math.ceil(this.filteredImages.length / this.imagesPerPage);
    }
  },
  methods: {
  // 加载图片数据
  async loadImageData() {
    try {
      const response = await fetch('/data.json'); // 从 public 文件夹加载 JSON 数据
      const data = await response.json();
      this.images = data;
      // 默认加载时按拼音排序
      this.filteredImages = this.sortImagesByPinyin(this.images);
    } catch (error) {
      console.error('加载图片数据失败:', error);
    }
  },
  // 模糊搜索图片
  searchImages() {
    if (this.searchQuery) {
      const query = this.searchQuery.trim().toLowerCase();
      const regex = new RegExp(query.split('').join('.*'), 'i'); // 创建一个模糊搜索正则表达式
      
      // 筛选出匹配名称或者关键字的图片
      this.filteredImages = this.images.filter(image =>
        regex.test(image.name.toLowerCase())
      );
    } else {
      this.filteredImages = this.images;
    }
    // 重置当前页码
    this.currentPage = 1;
  },
  // 按拼音排序图片
  sortImagesByPinyin(images) {
    return images.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
  },
  // 改变当前页码
  changePage(page) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  },
  // 点击图片跳转到详细页面
  goToDetailPage(image) {
    const url = `/detail/${encodeURIComponent(image.name)}`;
    this.$router.push(url); // 使用 Vue Router 进行路由跳转
  }
}
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* 搜索输入框 */
.search-input {
  width: 80%;
  max-width: 600px;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* 图片之间的间隔 */
}
.image-item {
  width: 180px; /* 每个图片项的固定宽度 */
  height: 250px; /* 每个图片项的固定高度 */
  text-align: center;
  border: 1px solid #ddd; /* 给每个图片框加一个边框 */
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px; /* 圆角效果 */
  overflow: hidden; /* 防止图片溢出 */
  background-color: #f9f9f9;
  transition: transform 0.2s ease; /* 鼠标悬停时的动画效果 */
}
.image-item:hover {
  transform: scale(1.05); /* 鼠标悬停时稍微放大图片框 */
}
.image-item img {
  width: 100%;
  height: 150px;
  object-fit: cover; /* 保持图片比例并裁剪 */
}
.image-name {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 超长文本显示省略号 */
}
.pagination {
  margin-top: 20px;
  text-align: center;
}
.pagination button {
  padding: 5px 10px;
  margin: 0 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
.pagination button:disabled {
  background-color: #ccc;
}
</style>
