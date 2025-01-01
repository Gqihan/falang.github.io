<template>
  <div>
    <section class="carousel">
      <!-- 轮播窗口 -->
      <div class="slides" :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }">
        <img v-for="(img, index) in images" :key="index" :src="img" alt="珐琅艺术图片" class="slide-image" />
      </div>
      <!-- 小圆点 -->
      <div class="dots">
        <span v-for="(img, index) in images" :key="index" 
              :class="['dot', { active: currentIndex === index }]" 
              @click="goToSlide(index)"></span>
      </div>
    </section>

    <section class="introduction">
      <div class="intro-container">
        <div class="intro-text">
          <h1>探索珐琅</h1>
          <p>珐琅器是以珐琅为材料装饰而制成的器物，又称“佛郎”“法蓝”，由中国隋唐时古西域地名拂菻音译而来。其基本成分为石英、长石、硼砂和氟化物，与陶瓷釉、琉璃、玻璃同属硅酸盐类物质。<br><br>
            依据具体加工工艺的不同，又可分为掐丝珐琅器、錾胎珐琅器、画珐琅器和透明珐琅器等几个品种。其中，俗称景泰蓝的掐丝珐琅历史最长、数量最多、最有代表性。画珐琅、透明珐琅、锤胎珐琅的生产仅在清代，錾胎珐琅在明代虽已出现，但为数甚少，入清才数量稍多。<br><br>
            中国的珐琅器制作是在西方艺术影响下产生的，特别是掐丝珐琅，始终没有改变色彩明艳、图案繁密、效果富丽的风貌，带有鲜明的伊斯兰艺术印痕，而常与同时代中国艺术区别明显。中国珐琅器虽可能在元代已经出现，但大量制作却从明代开始，入清制作更加兴盛。</p>
        </div>
        <div class="intro-image">
          <img src="../photos/珐琅1.jpg" alt="珐琅器" />
        </div>
      </div>
    </section>
      <!-- 分割线 -->
      <div class="divider"></div>
    <!-- 珐琅工艺部分 -->
    <section class="crafts">
      <div class="crafts-container">
        <!-- 左侧文字内容 -->
        <div class="crafts-text">
          <h2>珐琅工艺</h2>
          <p>
            <strong>掐丝珐琅：</strong>
掐丝珐琅是中国传统工艺中最具代表性的一种技艺，其制作过程极其精细复杂。掐丝珐琅的制作首先以铜或其他金属为胎体，然后将金属丝掐制成各种精美的花纹图案。这些花纹一般以自然景物、传统纹样为主，如祥云、莲花、龙凤等。掐好的金属丝需用天然松香将其固定于胎体表面，并通过焊接工艺牢固地粘附。  

接下来，工匠会使用色彩丰富的珐琅釉料逐一填充每一个分隔的区域。这些釉料由矿物质研磨制成，可以在高温下熔融，形成玻璃质地。每次填充后，胎体都会被送入窑炉烧制，釉料在高温下融化并凝固。通常需要多次填充和烧制，确保釉色饱满均匀，层次丰富。  

烧制完成后，还需要经过抛光等步骤，去除釉料表面的杂质，最终使作品表面光洁亮丽，色泽鲜艳。
          </p>
          <br>
          <br>
          <p>
            <strong>画珐琅：</strong>
            画珐琅是一种源自西方，并在中国清代达到巅峰的工艺美术形式。它与掐丝珐琅不同，不需要用金属丝勾勒图案，而是直接在金属胎体上绘制纹饰，然后填充珐琅釉料，通过多次烧制完成。因其工艺精湛、色彩柔和，画珐琅制品常用于宫廷器皿和装饰品的制作，是清代御用艺术品的典型代表。
          </p>
          <br>
          <br>
          <p>
            <strong>透明珐琅：</strong>
            透明珐琅的制作过程精细而独特。首先，工匠会精心挑选金属胎体，通常为金、银、铜等金属，并对其表面进行精细的打磨或雕刻，以创造出细腻的纹理效果。然后，将调制好的透明釉料均匀地涂覆在金属表面。釉料的颜色可以是天然的透明，也可以通过添加微量金属氧化物调配出各种色彩。在烧制过程中，透明釉料会与金属表面紧密融合，形成光滑的釉层，并展现出下方金属的质感。
          </p>
          <br>
          <br>
          <p>
            <strong>錾胎珐琅：</strong>
            錾胎珐琅是一种结合錾刻工艺与珐琅工艺的艺术形式，先在金属胎体上通过錾刻技术雕刻出复杂精美的花纹，再将珐琅釉料填充至花纹中，经过高温烧制完成。这种工艺以其繁复的制作过程、精致的纹饰效果和极具立体感的艺术表现而闻名，是珐琅艺术中的重要分支之一。
          </p>
        </div>

        <!-- 右侧图片内容 -->
        <div class="crafts-images">
          <img src="../photos/掐丝珐琅.jpg" alt="掐丝珐琅" class="craft-img" />
          <img src="../photos/画珐琅.jpg" alt="画珐琅" class="craft-img" />
          <img src="../photos/透明珐琅.jpg" alt="透明珐琅" class="craft-img" />
          <img src="../photos/錾胎珐琅.jpg" alt="錾胎珐琅" class="craft-img" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import img1 from '../photos/1.png';
import img2 from '../photos/2.png';
import img3 from '../photos/3.png';

export default {
  name: 'HomePage',
  data() {
    return {
      currentIndex: 0,
      images: [img1, img2, img3],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    // 自动轮播，每3秒切换一次
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  },
};
</script>

<style>
.carousel {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0; /* 去除间距 */
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide-image {
  width: 100vw; /* 使图片自适应宽度 */
  height: 100%; /* 图片高度自适应 */
  object-fit: cover; /* 保持比例，裁剪多余部分 */
}

.dots {
  position: absolute;
  bottom: 10px; /* 让小圆点放在图片下方 */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10; /* 确保圆点覆盖在图片上 */
}

.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 10px;
  background-color: #b7b7b7;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #b7b7b7;
}

.dot.active {
  background-color: #ffffff;
  border: 2px solid #fff;
}

/* 分割线样式 */
.divider {
  width: 100%;
  height: 25px;
  background-color: #4a3b3b; /* 棕色 */
  margin: 0px 0; /* 分割线上下间距 */
}
/* 珐琅工艺部分样式 */
.crafts {
  background-color: #f0decc; /* 淡黄色背景 */
  color: #4a3b3b;
  padding: 20px 0;
}

/* crafts-container 调整 */
.crafts-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
  gap: 20px; /* 框和图片之间的间距 */
}

/* crafts-text 样式调整 */
.crafts-text {
  flex: 2;
  text-align: left;
  background-color: #ffffff; /* 白色背景 */
  border-radius: 12px; /* 圆角 */
  padding: 20px; /* 内部文字和框的距离 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加轻微阴影 */
  margin-right: 20px; /* 和右侧图片保持一定距离 */
  border: 1px solid #ddd; /* 边框颜色 */
}

.crafts-text h2 {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.crafts-text p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 15px;
}

/* 右侧图片内容样式 */
.crafts-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.craft-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.introduction {
  background-color: #f0decc; /* 文化特色的淡黄色 */
  color: #4a3b3b;
  padding: 20px 0; /* 调整上下内边距 */
  text-align: center;
  margin-top: 0; /* 去除间距 */
  border: 2px solid #4a3b3b; /* 容器外侧框 */
}

/* intro-container 调整 */
.intro-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; /* 增加整体内边距 */
  gap: 20px; /* 框和图片之间的间距 */
}

/* intro-text 样式调整 */
.intro-text {
  flex: 1;
  text-align: left;
  background-color: #ffffff; /* 白色背景 */
  border-radius: 12px; /* 圆角 */
  padding: 20px; /* 内部文字和框的距离 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加轻微阴影 */
  margin-right: 20px; /* 和右侧图片保持一定距离 */
  border: 1px solid #ddd; /* 边框颜色 */
}

.intro-text h1 {
  text-align: center; /* 使标题居中 */
  font-size: 40px;    /* 调整字体大小，可以根据需求增大 */
  font-weight: bold;  /* 加粗字体 */
}

.intro-text p {
  font-size: 18px;
  line-height: 1.6;
}

.intro-image img {
  width: 300px; /* 图片宽度 */
  height: auto; /* 高度自适应 */
  border-radius: 8px; /* 图片圆角 */
}

/* 新增的四张图片展示区域 */
.intro-images {
  display: flex;
  justify-content: space-around; /* 四张图片均匀分布 */
  flex-wrap: wrap; /* 如果屏幕尺寸小于四个图片宽度，则换行 */
  gap: 20px; /* 图片间距 */
  padding: 20px 10px;
}

.intro-img {
  width: 200px; /* 图片宽度 */
  height: 200px; /* 图片高度 */
  object-fit: cover; /* 保持图片比例 */
  border-radius: 8px; /* 图片圆角 */
}
</style>
