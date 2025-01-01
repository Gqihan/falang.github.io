<template>
  <div class="container">
    <div class="map-container" ref="mapContainer"></div>
    <div class="content-container">
      <!-- 按钮容器 -->
      <div class="button-container">
        <button v-for="(period, index) in periods" :key="index" @click="switchPeriod(index)">
          {{ period.name }}
        </button>
      </div>

      <!-- 介绍内容 -->
      <div class="info-container">
        <div v-if="showInfo" class="info-box">
          <h3>{{ periodInfo.title }}</h3>
          <p>{{ periodInfo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts/core';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, GeoComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import worldJson from '../assets/world.json'; // 世界地图数据
import chinaJson from '../assets/china.json'; // 中国地图数据

echarts.use([MapChart, TooltipComponent, GeoComponent, CanvasRenderer]);

export default {
  name: 'GeoMap',
  data() {
    return {
      chart: null,
      currentMap: 'world',
      showInfo: false,
      periodInfo: {
        title: '',
        description: ''
      },
      periods: [
      {
  name: '外部传入中国',
  description: '珐琅技术通过丝绸之路从西亚、中亚传入中国。珐琅工艺最早在公元前几百年间起源于古埃及，并在随后的几个世纪中传播到中东地区，特别是波斯（现伊朗）和印度地区。随着丝绸之路的开通，珐琅技术通过这条贸易路线逐渐进入中国。在中国，珐琅工艺开始受到宫廷和上层社会的青睐，并与中国的传统瓷器工艺相融合。中国与西亚、中亚的文化交流使得珐琅工艺不仅仅是装饰品的制作，更成为了艺术和文化的重要载体。丝绸之路的开放不仅促进了物质的流通，也加深了东西方文化的互动。',
  map: 'world',
  regions: ['Iran', 'India', 'China']
},
{
  name: '唐宋时期（中国内部传播）',
  description: '珐琅技术在唐代和宋代通过对外交流逐渐在中国内部传播。唐代是中国与外界交流的黄金时期，丝绸之路不仅是商贸之路，更是文化传播的重要渠道。唐朝时期，珐琅工艺开始在中国的艺术品中占有一席之地，尤其在宫廷和寺庙的装饰中得到广泛应用。宋代的对外贸易以及文化交流使得珐琅技术进一步传播，尤其是对中国古代陶瓷和青铜器的装饰产生了深远影响。珐琅工艺在这个时期逐渐发展成为独特的艺术形式，并与中国传统的金属工艺和陶瓷工艺相结合，形成了独具中国特色的艺术风格。这个时期的珐琅艺术影响了后来的工艺发展，并为明清时期的景泰蓝工艺奠定了基础。',
  map: 'china',
  regions: ['陕西', '江苏', '浙江']
},
{
  name: '明清时期（景泰蓝）',
  description: '珐琅技术在明清时期特别是景泰蓝工艺的盛行。明代的景泰蓝工艺是中国珐琅艺术的巅峰时期，景泰蓝作为明代宫廷的重要艺术品之一，享有极高的声誉。景泰蓝是一种以金属胎为基础，经过多次焊接和着色的复杂工艺，其色彩鲜艳、图案精美，极具艺术价值。明清时期，景泰蓝不仅在宫廷和贵族中广受欢迎，还逐渐走向民间，成为百姓日常生活中的装饰品。特别是在清代，景泰蓝不仅成为皇家艺术的象征，还在民间工艺中得到了广泛的应用。明清时期的珐琅工艺对后来的工艺传承产生了深远影响，景泰蓝成为中国传统工艺中最具代表性的艺术形式之一，至今仍然受到高度评价。',
  map: 'china',
  regions: ['北京市', '江西', '广东']
},
{
  name: '近现代（工艺传承与发展）',
  description: '近现代珐琅技术在中国经历了现代化改良与国际化传播，特别是通过艺术和工业领域的融合。进入20世纪后，珐琅技术逐渐发展为现代工艺与艺术的结合体，不仅保留了传统的工艺手法，还引入了新的材料与技术。中国的珐琅工艺在现代化过程中受到了西方工艺的影响，尤其在装饰艺术和工业设计领域得到了广泛应用。特别是在上海、广州等城市，珐琅技艺的传承与创新形成了独特的工艺特色。景德镇等传统瓷器生产中心也开始融合珐琅工艺，创造出更加现代化的艺术作品。同时，珐琅技术在国际上的传播也不断加深，许多艺术家和设计师通过展览与艺术交流将中国珐琅工艺带向了全球。这一时期的珐琅不仅仅是艺术创作，更成为了文化交流和国际化的重要组成部分。',
  map: 'china',
  regions: ['上海市', '广东', '江西']
}
      ]
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.chart = echarts.init(this.$refs.mapContainer);

      // 注册地图数据
      echarts.registerMap('world', worldJson);
      echarts.registerMap('china', chinaJson);

      // 初始化显示世界地图
      this.chart.setOption(this.getMapOption('world', this.periods[0].regions));

      // 默认显示第一个时期
      this.switchPeriod(0);
    },
    getMapOption(mapName, highlightRegions) {
      return {
        geo: {
          map: mapName,
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#d9d9d9',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#ffa500'
            }
          },
          regions: highlightRegions.map(region => ({
            name: region,
            itemStyle: {
              areaColor: '#ff6347'
            }
          }))
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        }
      };
    },
    switchPeriod(index) {
      const period = this.periods[index];
      // 直接切换地图数据
      this.chart.setOption(this.getMapOption(period.map, period.regions));
      this.currentMap = period.map;

      // 更新描述信息
      this.showPeriodInfo(period);
    },
    showPeriodInfo(period) {
      this.showInfo = true;
      this.periodInfo = {
        title: period.name,
        description: period.description
      };
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  background-image: url('../photos/丝路.jpg');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.map-container {
  width: 100%;
  height: 75vh;
}

.content-container {
  position: auto;
  bottom: 0;
  width: 100%;
  padding-bottom: 0px; /* 确保介绍和按钮有足够的间距 */
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0px;
  padding-bottom: 10px;
}

button {
  flex: 1;
  margin:  10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.info-container {
  margin-top: 20px;
}

.info-box {
  margin-top: 20px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-box h3 {
  margin: 0;
  font-size: 20px;
}

.info-box p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
